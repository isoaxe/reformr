'use client';

import { useState, useEffect } from 'react';
import Spinner from '@/components/spinner';
import { makeGetRequest } from '@/util/helpers';

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
      const url = '/api/users/patient';
      const data = await makeGetRequest(url);
      const { error, paidPatients } = data;
      if (error) console.log('Error fetching patients: ', { error });
      else
        setPatients(
          paidPatients
            .filter((patient) => patient.identityStatus === 'requires_input')
            .sort((a, b) => b.lastPayment - a.lastPayment) // most recent first
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
          <p className="w-28">Payment Date</p>
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
