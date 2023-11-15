'use client';

import { useState, useEffect } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdLocalShipping, MdOutlinePayment } from 'react-icons/md';
import { MdSubscriptions } from 'react-icons/md';
import { doc, getDoc } from 'firebase/firestore';
import { Button } from '@mui/material';
import DropdownItem from '../dropdown-item';
import { getDocId } from '@/util/helpers';
import { useAuth } from '@/util/hooks';
import { db } from '@/util/firebase';

export default function PatientDashboard() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState({});
  const [stripeUid, setStripeUid] = useState('');
  const [card, setCard] = useState({});
  const { user } = useAuth();

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
  const cardIcon = <MdOutlinePayment size={30} />;
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
  const subscriptionIcon = <MdSubscriptions size={30} />;
  const subscriptionContent = (
    <>
      <div className="flex w-full flex-row justify-between">
        <Button
          variant="outlined"
          className="w-fit text-lg md:text-xl"
          color="error"
        >
          Cancel
        </Button>
        <Button variant="outlined" className="w-fit text-lg md:text-xl">
          Pause
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

  return (
    <main className="mx-auto flex min-h-[calc(100vh-23rem)] w-full max-w-3xl flex-col px-4 xs:px-9">
      <h1 className="py-4 text-2xl text-sky-600 md:py-8 md:text-4xl">
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
    </main>
  );
}
