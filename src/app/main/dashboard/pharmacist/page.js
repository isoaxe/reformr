'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FormControl, Select, MenuItem, Button } from '@mui/material';
import { auth } from '@/util/firebase';
import { useAuth } from '@/util/hooks';

export default function PharmacistDashboard() {
  const [role, setRole] = useState('');
  const [patients, setPatients] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isPageLoaded, setPageLoaded] = useState(false);
  const router = useRouter();
  const { user, logout } = useAuth();

  const statusOptions = [
    'pending',
    'prescription printed',
    'medication dispensed',
    'order packed',
    'collected by courier',
  ];

  async function storeStatus(email, orderStatus) {
    const options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, orderStatus }),
    };
    setLoading(true);
    // TODO: Add token from firebase auth to request.
    const res = await fetch('/api/users/patient', options);
    const data = await res.json();
    if (data.success) console.log('Successfully updated order status.');
    else console.log('Error updating order status: ', data.error);
    setLoading(false);
  }

  function Patient({ patient }) {
    const { name, email } = patient;
    return (
      <div className="flex flex-row">
        <p className="w-40">{name}</p>
        <p className="w-64">{email}</p>
        <StatusDropdown patient={patient} />
      </div>
    );
  }

  function StatusDropdown({ patient }) {
    return (
      <FormControl>
        <Select
          variant="standard"
          value={patient.orderStatus}
          className="w-48"
          disabled={isLoading}
          onChange={(e) => {
            const updatedStatus = e.target.value;
            setPatients([...patients], (patient.orderStatus = updatedStatus));
            storeStatus(patient.email, updatedStatus);
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
      if (success)
        setPatients(
          allUsers.filter((user) => user.patientStatus === 'medically cleared')
        );
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
    if (!user || role !== 'pharmacist') router.push('/main/login'); // redirect to login if not pharmacist.
  }, [isPageLoaded, user, role, router]);

  return (
    <main className="mx-auto flex min-h-[calc(100vh-23rem)] w-fit max-w-3xl flex-col px-4 xs:px-9">
      <h1 className="mb-2 pt-4 text-center text-xl font-semibold text-sky-600 md:pt-8 md:text-2xl">
        Current Patients
      </h1>
      <div className="flex flex-row font-semibold">
        <p className="w-40">Name</p>
        <p className="w-64">Email</p>
        <p>Order Status</p>
      </div>
      {patients?.map((patient, idx) => (
        <Patient patient={patient} key={idx} />
      ))}
      <Button
        variant="outlined"
        className="mx-auto mt-5 w-full max-w-xs text-lg md:text-xl"
        onClick={logout}
      >
        Logout
      </Button>
    </main>
  );
}
