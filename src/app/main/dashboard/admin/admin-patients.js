'use client';

import { useState, useEffect } from 'react';
import Spinner from '@/components/spinner';
import { auth } from '@/util/firebase';

/* Displays a list of patients whose identity verification has failed to the admin user. */
export default function AdminPatients({ user }) {
  const [patients, setPatients] = useState([]);
  const [isFetched, setFetched] = useState(false);

  function Patient({ patient }) {
    const { name, email, lastPayment } = patient;
    const lastPaymentDate = new Date(lastPayment).toDateString().slice(4);

    return (
      <div className="flex flex-row">
        <p className="w-40">{name}</p>
        <p className="w-64">{email}</p>
        <p className="w-28">{lastPaymentDate}</p>
      </div>
    );
  }

  useEffect(() => {
    if (!user) return;
    const getPatients = async () => {
      const fireToken = await auth.currentUser.getIdToken();
      const options = {
        method: 'GET',
        headers: { authorization: `Bearer ${fireToken}` },
      };
      const res = await fetch('/api/users/patient', options);
      const { error, paidPatients } = await res.json();
      if (error) console.log('Error fetching patients: ', { error });
      else
        setPatients(
          paidPatients.filter((patient) => patient.identityStatus === 'failed')
        );
      setFetched(true);
    };
    getPatients();
  }, [user]);

  return (
    <section className="mx-auto mb-20 mt-10 flex-col">
      <h1 className="mb-2 pt-4 text-center text-xl font-semibold text-sky-600 md:pt-8 md:text-2xl">
        Patients with Failed Identity Verification
      </h1>
      {!patients.length && isFetched ? (
        <p className="mt-10 text-center text-slate-700">
          No patients with failed identity verification.
        </p>
      ) : (
        <div className="flex flex-row font-semibold">
          <p className="w-40">Name</p>
          <p className="w-64">Email</p>
          <p className="w-28">Last Payment</p>
        </div>
      )}
      {isFetched ? (
        patients?.map((patient, idx) => <Patient patient={patient} key={idx} />)
      ) : (
        <Spinner />
      )}
    </section>
  );
}
