'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { doc, getDoc } from 'firebase/firestore';
import { Button } from '@mui/material';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdLocalShipping, MdSubscriptions } from 'react-icons/md';
import { FaCreditCard } from 'react-icons/fa6';
import DropdownItem from '../dropdown-item';
import CancelModal from './cancel-modal';
import PauseModal from './pause-modal';
import { getDocId } from '@/util/helpers';
import { useAuth } from '@/util/hooks';
import { db } from '@/util/firebase';

export default function PatientDashboard() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState({});
  const [stripeUid, setStripeUid] = useState('');
  const [expiryDate, setExpiryDate] = useState(null);
  const [subId, setSubId] = useState('');
  const [isSubCancelled, setSubCancelled] = useState(false);
  const [isSubPaused, setSubPaused] = useState(false);
  const [card, setCard] = useState({});
  const [isPageLoaded, setPageLoaded] = useState(false);
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [pauseModalOpen, setPauseModalOpen] = useState(false);
  const router = useRouter();
  const { user, logout } = useAuth();

  /* Props for patient info section. */
  const patientInfoIcon = <BsFillPersonFill size={30} />;
  const patientInfoContent = (
    <>
      <div className="flex flex-row">
        <p className="w-20 font-medium">Name:</p>
        <p>{name}</p>
      </div>
      <div className="my-1 flex flex-row">
        <p className="w-20 font-medium">Email:</p>
        <p>{email}</p>
      </div>
      <div className="flex flex-row">
        <p className="w-20 font-medium">Phone:</p>
        <p>{phone}</p>
      </div>
    </>
  );

  /* Props for delivery address section. */
  const deliveryIcon = <MdLocalShipping size={30} />;
  const deliveryContent = (
    <>
      <p>{address.address1}</p>
      <p>{address?.address2}</p>
      <p>{address?.address3}</p>
      <p>{address?.postcode}</p>
    </>
  );

  /* Props for the payment card section. */
  const cardIcon = <FaCreditCard size={30} />;
  const cardContent = (
    <>
      <div className="flex flex-row">
        <p className="w-28 font-medium">Brand:</p>
        <p>{card?.brand}</p>
      </div>
      <div className="my-1 flex flex-row">
        <p className="w-28 font-medium">Number:</p>
        <p>**** **** **** {card?.last4}</p>
      </div>
      <div className="flex flex-row">
        <p className="w-28 font-medium">Expiry:</p>
        <p>
          {card?.exp_month} / {card?.exp_year}
        </p>
      </div>
    </>
  );

  /* Props for the subscription management section. */
  const textIfCancelled = `You have cancelled your subscription and will lose access to the platform on ${expiryDate?.toDateString()}. No further deliveries will be sent or charges made.`;
  const textIfPaused = `You have one more delivery on ${expiryDate?.toDateString()}. They will then be paused for a month and you won't be charged.`;
  const textIfSubbed = `Your next scheduled payment is on ${expiryDate?.toDateString()}. You can also pause or cancel your subscription below.`;
  const subscriptionIcon = <MdSubscriptions size={30} />;
  const subscriptionContent = (
    <>
      <p className="mb-5 text-lg md:text-xl">
        {isSubCancelled
          ? textIfCancelled
          : isSubPaused
          ? textIfPaused
          : textIfSubbed}
      </p>
      <div className="flex w-full flex-row justify-between">
        <Button
          variant="outlined"
          className="w-fit text-lg md:text-xl"
          onClick={() => setPauseModalOpen(true)}
          disabled={isSubCancelled || isSubPaused}
        >
          Pause
        </Button>
        <Button
          variant="outlined"
          className="w-fit text-lg md:text-xl"
          color="error"
          onClick={() => setCancelModalOpen(true)}
          disabled={isSubCancelled}
        >
          Cancel
        </Button>
      </div>
    </>
  );

  useEffect(() => {
    if (!user) return;
    setName(user.displayName);
    setEmail(user.email);

    async function getPatientData() {
      const docId = await getDocId(email);
      const userRef = doc(db, 'users', docId);
      const userSnap = await getDoc(userRef);
      const userData = userSnap.data();
      setPhone(userData?.screening?.phone);
      setAddress(userData?.address);
      setStripeUid(userData?.payments?.stripeUid);
      setExpiryDate(new Date(userData?.payments?.expiryDate?.seconds * 1000));
      setSubId(userData?.payments?.subscription?.subscriptionId);
      setSubCancelled(userData?.payments?.subscription?.isCancelled);
      setSubPaused(userData?.payments?.subscription?.isPaused);
    }

    if (email) getPatientData();
  }, [user, email]);

  useEffect(() => {
    async function getCardData() {
      // TODO: Add token from firebase auth to request.
      const res = await fetch(`/api/payments/card?stripeUid=${stripeUid}`);
      const json = await res.json();
      if (!json.success) console.log(json.error);
      const { card } = json;
      setCard(card);
    }
    if (stripeUid) getCardData();
  }, [stripeUid]);

  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true); // assume user fetched within a second.
    }, 1000);
  }, [user, router]);

  useEffect(() => {
    if (!isPageLoaded) return;
    if (!user) router.push('/main/login'); // redirect to login if no user.
  }, [isPageLoaded, user, router]);

  return (
    <main className="mx-auto flex min-h-[calc(100vh-23rem)] w-full max-w-3xl flex-col px-4 xs:px-9">
      <h1 className="py-4 text-center text-2xl font-semibold text-sky-600 md:py-8 md:text-4xl">
        Patient Details
      </h1>
      <DropdownItem
        text="Your Info"
        icon={patientInfoIcon}
        hidden={patientInfoContent}
      />
      <DropdownItem
        text="Delivery Address"
        icon={deliveryIcon}
        hidden={deliveryContent}
      />
      <DropdownItem text="Payment Card" icon={cardIcon} hidden={cardContent} />
      <DropdownItem
        text="Subscription Management"
        icon={subscriptionIcon}
        hidden={subscriptionContent}
      />
      <Button
        variant="outlined"
        className="mx-auto mb-5 w-full max-w-xs text-lg md:text-xl"
        onClick={logout}
      >
        Logout
      </Button>
      <p className="text-center text-lg italic md:text-xl">
        Need help? Call us on
        <span className="text-violet-600"> 020 123 4567 </span>or email us at
        <span className="text-violet-600"> info@reformr.co.nz</span>
      </p>
      <PauseModal
        open={pauseModalOpen}
        setOpen={setPauseModalOpen}
        setSubPaused={setSubPaused}
        subId={subId}
        email={email}
      />
      <CancelModal
        open={cancelModalOpen}
        setOpen={setCancelModalOpen}
        setSubCancelled={setSubCancelled}
        subId={subId}
        email={email}
      />
    </main>
  );
}
