'use client';

import { useState, useEffect } from 'react';
import Spinner from '@/components/spinner';

/* Displays a list of patients whose identity verification has failed to the admin user. */
export default function AdminPatients({ user }) {
  const [patients, setPatients] = useState([]);

  function Patient({ patient }) {
    const { name, email, lastPayment, identityStatus } = patient;
    const lastPaymentDate = new Date(lastPayment).toDateString().slice(4);

    return (
      <div className="flex flex-row">
        <p className="w-40">{name}</p>
        <p className="w-64">{email}</p>
        <p className="w-40">{lastPaymentDate}</p>
        <p className="w-40">{identityStatus}</p>
      </div>
    );
  }

  useEffect(() => {
    if (!user) return;
    // TODO: Add token from firebase auth to request.
    const getPatients = async () => {
      const res = await fetch('/api/users/patient');
      const { success, allUsers } = await res.json();
      if (success)
        setPatients(
          allUsers.filter((user) => user.identityStatus === 'failed')
        );
    };
    getPatients();
  }, [user]);

  return (
    <section className="mx-auto mb-20 mt-10 flex-col">
      <h1 className="mb-2 pt-4 text-center text-xl font-semibold text-sky-600 md:pt-8 md:text-2xl">
        Patients with Failed Identity Verification
      </h1>
      <div className="flex flex-row font-semibold">
        <p className="w-40">Name</p>
        <p className="w-64">Email</p>
        <p className="w-40">Last Payment</p>
        <p className="w-40">Identity Status</p>
      </div>
      {patients.length ? (
        patients?.map((patient, idx) => <Patient patient={patient} key={idx} />)
      ) : (
        <Spinner />
      )}
    </section>
  );
}
