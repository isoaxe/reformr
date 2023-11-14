'use client';

import { useState, useEffect } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import DropdownItem from '../dropdown-item';
import { useAuth } from '@/util/hooks';

export default function PatientDashboard() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
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

  useEffect(() => {
    if (!user) return;
    setName(user.displayName);
    setEmail(user.email);
    setPhone(user.phoneNumber);
  }, [user]);

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
    </main>
  );
}
