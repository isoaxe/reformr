'use client';

import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { Button } from '@mui/material';
import { BsFillPersonFill } from 'react-icons/bs';
import { GiPresent } from 'react-icons/gi';
import { MdLocalShipping, MdSubscriptions } from 'react-icons/md';
import { FaCreditCard } from 'react-icons/fa6';
import DropdownItem from '../dropdown-item';
import CancelModal from './cancel-modal';
import PauseModal from './pause-modal';
import { makeGetRequest } from '@/util/helpers';
import { useAuth, useRedirectNoUser } from '@/util/hooks';
import { db } from '@/util/firebase';

export default function PatientDashboard() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState({});
  const [stripeUid, setStripeUid] = useState('');
  const [medicalStatus, setMedicalStatus] = useState('');
  const [orderStatus, setOrderStatus] = useState('');
  const [trackingNumber, setTrackingNumber] = useState('');
  const [lastPayment, setLastPayment] = useState('');
  const [expiryDate, setExpiryDate] = useState(null);
  const [subId, setSubId] = useState('');
  const [isSubCancelled, setSubCancelled] = useState(false);
  const [isSubPaused, setSubPaused] = useState(false);
  const [card, setCard] = useState({});
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [pauseModalOpen, setPauseModalOpen] = useState(false);
  const { user, logout } = useAuth();

  useRedirectNoUser(user);

  /* Props for patient info section. */
  const patientInfoIcon = <BsFillPersonFill size={30} />;
  const patientInfoContent = (
    <>
      <div className="flex flex-row">
        <p className="w-24 font-medium">Name:</p>
        <p>{name}</p>
      </div>
      <div className="my-1 flex flex-row">
        <p className="w-24 font-medium">Email:</p>
        <p>{email}</p>
      </div>
      <div className="flex flex-row">
        <p className="w-24 font-medium">Phone:</p>
        <p>{phone}</p>
      </div>
      <div className="flex flex-row">
        <p className="w-24 font-medium">Status:</p>
        <p>{medicalStatus}</p>
      </div>
    </>
  );

  /* Props for delivery address section. */
  const deliveryIcon = <MdLocalShipping size={30} />;
  const deliveryContent = (
    <>
      <p>{address?.address1}</p>
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

  /* Props for the order details section. */
  const orderIcon = <GiPresent size={35} />;
  const orderContent = (
    <>
      <div className="my-1 flex flex-row">
        <p className="w-44 font-medium">Order Status:</p>
        <p>{orderStatus}</p>
      </div>
      <div className="flex flex-row">
        <p className="w-44 font-medium">Tracking No:</p>
        <p>{trackingNumber}</p>
      </div>
      <div className="flex flex-row">
        <p className="w-44 font-medium">Last Payment:</p>
        <p>{lastPayment}</p>
      </div>
    </>
  );

  /* Props for the subscription management section. */
  const textIfCancelled = `You have cancelled your subscription and will lose access to the platform on ${expiryDate?.toDateString()}. No further deliveries will be sent or charges made.`;
  const textIfPaused = `Deliveries have been paused for a month and you won't be charged. Billing will resume on ${expiryDate?.toDateString()}.`;
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
          className="w-fit !text-lg md:!text-xl"
          onClick={() => setPauseModalOpen(true)}
          disabled={isSubCancelled || isSubPaused}
        >
          Pause
        </Button>
        <Button
          variant="outlined"
          className="w-fit !text-lg md:!text-xl"
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
      const tokenResult = await user.getIdTokenResult();
      const { docId } = tokenResult.claims;
      const patientRef = doc(db, 'patients', docId);
      const patientDoc = await getDoc(patientRef);
      const patientData = patientDoc.data();
      const { payments } = patientData;
      const lastPaymentUnix = payments?.payments?.pop()?.paymentDate?.seconds;
      const lastOrder = patientData?.orders?.pop();
      setPhone(patientData?.screening?.phone);
      setAddress(patientData?.address);
      setStripeUid(payments?.stripeUid);
      setMedicalStatus(patientData?.patientStatus);
      setOrderStatus(lastOrder.status);
      setTrackingNumber(lastOrder.trackingNumber);
      setLastPayment(new Date(lastPaymentUnix * 1000).toDateString());
      setExpiryDate(new Date(payments?.expiryDate?.seconds * 1000));
      setSubId(payments?.subscription?.subscriptionId);
      setSubCancelled(payments?.subscription?.isCancelled);
      setSubPaused(payments?.subscription?.isPaused);
    }

    if (email) getPatientData();
  }, [user, email]);

  useEffect(() => {
    async function getCardData() {
      const url = `/api/payments/card?stripeUid=${stripeUid}`;
      const data = await makeGetRequest(url);
      if (data.error) console.log({ error: data.error });
      else setCard(data.card);
    }
    if (stripeUid && email) getCardData();
  }, [stripeUid, email]);

  return (
    <main className="mx-auto mt-16 flex min-h-[calc(100vh-23rem)] w-full max-w-3xl flex-col px-4 xs:px-9">
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
        text="Order Details"
        icon={orderIcon}
        hidden={orderContent}
      />
      <DropdownItem
        text="Subscription Management"
        icon={subscriptionIcon}
        hidden={subscriptionContent}
      />
      <Button
        variant="outlined"
        className="!mx-auto !mb-5 w-full max-w-xs !text-lg md:!text-xl"
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
        setExpiryDate={setExpiryDate}
        subId={subId}
      />
      <CancelModal
        open={cancelModalOpen}
        setOpen={setCancelModalOpen}
        setSubCancelled={setSubCancelled}
        subId={subId}
      />
    </main>
  );
}
