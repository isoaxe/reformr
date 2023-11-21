'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FormControl, Select, MenuItem } from '@mui/material';
import { auth } from '@/util/firebase';
import { useAuth } from '@/util/hooks';

export default function DoctorDashboard() {
  const [role, setRole] = useState('');
  const [patients, setPatients] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  const statusOptions = [
    'pending',
    'medically cleared',
    'labs needed',
    'medically failed',
  ];

  function Patient({ patient }) {
    const { name, email } = patient;
    return (
      <div className="flex flex-row">
        <p className="w-40">{name}</p>
        <p className="w-64">{email}</p>
        <Dropdown patient={patient} />
      </div>
    );
  }

  function Dropdown({ patient }) {
    return (
      <FormControl>
        <Select
          variant="standard"
          value={patient.status}
          className="w-40"
          onChange={(e) => {
            setPatients([...patients], (patient.status = e.target.value));
          }}
        >
          {statusOptions.map((option, index) => (
            <MenuItem value={option} key={index}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }

  useEffect(() => {
    if (!user) return;
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
    if (role === '') return;
    if (role !== 'doctor') router.push('/main/login'); // redirect to login if not doctor.
  }, [role, router]);

  return (
    <main className="mx-auto flex min-h-[calc(100vh-23rem)] w-fit max-w-3xl flex-col px-4 xs:px-9">
      <h1 className="mb-2 pt-4 text-center text-xl font-semibold text-sky-600 md:pt-8 md:text-2xl">
        Current Patients
      </h1>
      <div className="flex flex-row font-semibold">
        <p className="w-40">Name</p>
        <p className="w-64">Email</p>
        <p>Status</p>
      </div>
      {patients?.map((patient, idx) => (
        <Patient patient={patient} key={idx} />
      ))}
    </main>
  );
}
