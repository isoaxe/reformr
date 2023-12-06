'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button, IconButton } from '@mui/material';
import { PiNotepadLight } from 'react-icons/pi';
import PatientRecord from './patient-record';
import StatusDropdown from '@/components/status-dropdown';
import Spinner from '@/components/spinner';
import { auth } from '@/util/firebase';
import { useAuth } from '@/util/hooks';

export default function DoctorDashboard() {
  const [role, setRole] = useState('');
  const [patients, setPatients] = useState([]);
  const [open, setOpen] = useState(false); // for patient record modal.
  const [fireDocId, setFireDocId] = useState('');
  const [isPageLoaded, setPageLoaded] = useState(false);
  const router = useRouter();
  const { user, logout } = useAuth();

  function openMedicalRecord(id) {
    setOpen(true);
    setFireDocId(id);
  }

  function Patient({ patient }) {
    const { name, email, docId } = patient;
    return (
      <div className="flex flex-row">
        <p className="w-40">{name}</p>
        <p className="w-64">{email}</p>
        <StatusDropdown
          patient={patient}
          patients={patients}
          setPatients={setPatients}
          isDoctor={true}
        />
        <IconButton onClick={() => openMedicalRecord(docId)} className="m-auto">
          <PiNotepadLight />
        </IconButton>
      </div>
    );
  }

  useEffect(() => {
    if (!user) return;
    // TODO: Add token from firebase auth to request.
    const getPatients = async () => {
      const res = await fetch('/api/users/patient');
      const { success, allUsers } = await res.json();
      if (success) setPatients(allUsers);
    };
    getPatients();
  }, [user]);

  useEffect(() => {
    if (!user) return;
    const getRole = async () =>
      await auth.currentUser
        .getIdTokenResult()
        .then((res) => setRole(res.claims.role));
    getRole();
  }, [user]);

  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true); // assume user fetched within a second.
    }, 1000);
  }, []);

  useEffect(() => {
    if (!isPageLoaded) return;
    if (!user || role !== 'doctor') router.push('/main/login'); // redirect to login if not doctor.
  }, [isPageLoaded, user, role, router]);

  return (
    <main className="mx-auto flex min-h-[calc(100vh-23rem)] w-fit max-w-4xl flex-col px-4 xs:px-9">
      <h1 className="mb-2 pt-4 text-center text-xl font-semibold text-sky-600 md:pt-8 md:text-2xl">
        Current Patients
      </h1>
      <div className="mb-2 flex flex-row font-semibold">
        <p className="w-40">Name</p>
        <p className="w-64">Email</p>
        <p className="w-52">Patient Status</p>
        <p className="w-20">Records</p>
      </div>
      {patients.length ? (
        patients?.map((patient, idx) => <Patient patient={patient} key={idx} />)
      ) : (
        <Spinner />
      )}
      <Button
        variant="outlined"
        className="mx-auto mt-5 w-full max-w-xs text-lg md:text-xl"
        onClick={logout}
      >
        Logout
      </Button>
      <PatientRecord open={open} setOpen={setOpen} fireDocId={fireDocId} />
    </main>
  );
}
