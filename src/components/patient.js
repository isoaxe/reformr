'use client';

import StatusDropdown from './status-dropdown';

export default function Patient({ patient, patients, setPatients }) {
  const { name, email, lastPayment, trackingNumber } = patient;
  const lastPaymentDate = new Date(lastPayment).toDateString().slice(4);

  return (
    <div className="flex flex-row">
      <p className="w-40">{name}</p>
      <p className="w-64">{email}</p>
      <StatusDropdown
        patient={patient}
        patients={patients}
        setPatients={setPatients}
      />
      <p className="w-36 pl-6">{lastPaymentDate}</p>
      <p className="w-32">{trackingNumber}</p>
    </div>
  );
}
