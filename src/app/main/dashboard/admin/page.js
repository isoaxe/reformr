'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TextField, Typography, RadioGroup } from '@mui/material';
import { FormControlLabel, Radio, Button } from '@mui/material';
import Patients from './admin-patients';
import TextInput from '@/components/quiz/text-input';
import Password from '@/components/quiz/password';
import { ADMIN_EMAIL } from '@/util/constants';
import { useAuth } from '@/util/hooks';

export default function AdminDashboard() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [helperText, setHelperText] = useState('');
  const [isInvalidEmail, setInvalidEmail] = useState(false);
  const [isPageLoaded, setPageLoaded] = useState(false);
  const router = useRouter();
  const { user, logout } = useAuth();

  async function createUser() {
    const name = `${firstName} ${lastName}`;
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, role, email, password }),
    };
    setLoading(true);
    // TODO: Add token from firebase auth to request.
    const res = await fetch('/api/users/professional', options);
    const data = await res.json();
    if (data.success) clearFields();
    else console.log('Error creating user: ', data.error);
    setLoading(false);
  }

  function clearFields() {
    setFirstName('');
    setLastName('');
    setRole('');
    setEmail('');
    setPassword('');
    setHelperText('');
  }

  const FormLabel = ({ label }) => (
    <Typography className="mr-10 mt-1 text-lg md:text-xl xl:text-2xl">
      {label}
    </Typography>
  );

  useEffect(() => {
    if (!/\S+@\S+\.\S+/.test(email)) setInvalidEmail(true);
    else setInvalidEmail(false);
  }, [email]);

  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true); // assume user fetched within a second.
    }, 1000);
  }, []);

  useEffect(() => {
    if (!isPageLoaded) return;
    if (user?.email !== ADMIN_EMAIL) router.push('/main/login'); // redirect to login if not admin.
  }, [isPageLoaded, user, router]);

  return (
    <main className="mx-auto flex min-h-[calc(100vh-23rem)] w-full max-w-xl flex-col px-4 xs:px-9">
      <h1 className="py-4 text-center text-2xl font-semibold text-sky-600 md:py-8 md:text-4xl">
        Create a new user
      </h1>
      <div className="flex flex-col xs:flex-row">
        <TextInput text={firstName} setText={setFirstName} label="First Name" />
        <div className="hidden w-10 xs:block"></div>
        <TextInput text={lastName} setText={setLastName} label="Last Name" />
      </div>
      <TextField
        variant="standard"
        label={
          <Typography className="text-lg md:text-xl xl:text-2xl">
            Email
          </Typography>
        }
        value={email}
        error={isInvalidEmail && !!email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mb: 2 }}
        InputProps={{ className: 'text-xl md:text-2xl xl:text-3xl' }}
      />
      <Password
        password={password}
        setPassword={setPassword}
        helperText={helperText}
        setHelperText={setHelperText}
      />
      <p className="mb-4 mt-6 text-xl text-slate-700 md:text-2xl xl:text-3xl">
        Select User Role:
      </p>
      <RadioGroup
        name="select-user-role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="flex w-full flex-row"
      >
        <FormControlLabel
          value="doctor"
          control={<Radio />}
          label={<FormLabel label="Doctor" />}
        />
        <FormControlLabel
          value="pharmacist"
          control={<Radio />}
          label={<FormLabel label="Pharmacist" />}
        />
      </RadioGroup>
      <Button
        variant="outlined"
        className="mt-6 w-full text-lg md:text-xl"
        onClick={createUser}
        disabled={
          !firstName ||
          !lastName ||
          isInvalidEmail ||
          !!helperText ||
          !role ||
          isLoading
        }
      >
        Create User
      </Button>
      <Patients user={user} />
      <Button
        variant="outlined"
        className="mx-auto mb-5 w-full text-lg md:text-xl"
        onClick={logout}
        sx={{ mt: 3 }}
      >
        Logout
      </Button>
    </main>
  );
}
