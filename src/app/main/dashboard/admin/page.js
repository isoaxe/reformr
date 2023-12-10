'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@mui/material';
import Patients from './admin-patients';
import { ADMIN_EMAILS } from '@/util/constants';
import { useAuth } from '@/util/hooks';
import CreateNewUser from './new-user';

export default function AdminDashboard() {
  const [isPageLoaded, setPageLoaded] = useState(false);
  const router = useRouter();
  const { user, logout } = useAuth();

  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true); // assume user fetched within a second.
    }, 1000);
  }, []);

  useEffect(() => {
    if (!isPageLoaded) return;
    if (!ADMIN_EMAILS.includes(user?.email)) router.push('/main/login'); // redirect to login if not admin.
  }, [isPageLoaded, user, router]);

  return (
    <main className="mx-auto flex min-h-[calc(100vh-23rem)] w-full flex-col px-4 xs:px-9">
      <CreateNewUser />
      <Patients user={user} />
      <Button
        variant="outlined"
        className="mx-auto mb-5 w-full max-w-lg text-lg md:text-xl"
        onClick={logout}
        sx={{ mt: 3 }}
      >
        Logout
      </Button>
    </main>
  );
}
