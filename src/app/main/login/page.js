'use client';

import { useState, useEffect } from 'react';
import { TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useRouter } from 'next/navigation';
import { sendPasswordResetEmail } from 'firebase/auth';
import Password from '@/components/quiz/password';
import Toast from '@/components/toast';
import { ADMIN_EMAIL } from '@/util/constants';
import { useAuth } from '@/util/hooks';
import { auth } from '@/util/firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [helperText, setHelperText] = useState('');
  const [isInvalidEmail, setInvalidEmail] = useState(false);
  const [showLoginFailure, setShowLoginFailure] = useState(false); // toast
  const [showResetSuccess, setShowResetSuccess] = useState(false); // toast
  const [showResetFailure, setShowResetFailure] = useState(false); // toast
  const { login } = useAuth();
  const router = useRouter();

  async function signIn() {
    try {
      setLoading(true);
      const user = await login(email, password);
      const role = await auth.currentUser
        .getIdTokenResult()
        .then((res) => res.claims.role);
      if (user?.email === ADMIN_EMAIL) router.push('/main/dashboard/admin');
      else if (role === 'doctor') router.push('/main/dashboard/doctor');
      else if (role === 'pharmacist') router.push('/main/dashboard/pharmacist');
      else if (user) router.push('/main/dashboard/patient');
    } catch (error) {
      console.log(error);
      setShowLoginFailure(true);
      setLoading(false);
    }
  }

  function passwordReset() {
    if (isInvalidEmail) return setShowResetFailure(true);
    sendPasswordResetEmail(auth, email);
    setShowResetSuccess(true);
  }

  useEffect(() => {
    if (!/\S+@\S+\.\S+/.test(email)) setInvalidEmail(true);
    else setInvalidEmail(false);
  }, [email]);

  return (
    <main className="flex min-h-[calc(100vh-23rem)] items-center">
      <div className="mx-auto flex w-full max-w-md flex-col px-4 py-28 xs:px-9 sm:max-w-lg">
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
          sx={{ mb: 6 }}
          InputProps={{ className: 'text-xl md:text-2xl xl:text-3xl' }}
        />
        <Password
          password={password}
          setPassword={setPassword}
          helperText={helperText}
          setHelperText={setHelperText}
        />
        <LoadingButton
          variant="outlined"
          className="mt-16 w-fit text-lg md:text-xl"
          onClick={signIn}
          disabled={!password || !!helperText || isInvalidEmail}
          loading={isLoading}
        >
          Login
        </LoadingButton>
        <p
          className="mt-10 w-fit text-sm text-blue-600 hover:cursor-pointer hover:underline sm:text-base"
          onClick={passwordReset}
        >
          Forgot Password?
        </p>
      </div>
      <Toast
        message="There was an error logging in. Please check that your email and password are correct."
        severity="error"
        open={showLoginFailure}
        setOpen={setShowLoginFailure}
        duration={6}
      />
      <Toast
        message="Password reset email sent."
        severity="success"
        open={showResetSuccess}
        setOpen={setShowResetSuccess}
      />
      <Toast
        message="Enter valid email to reset password."
        severity="warning"
        open={showResetFailure}
        setOpen={setShowResetFailure}
      />
    </main>
  );
}
