'use client';

import { useState } from 'react';
import { useCookies } from 'next-client-cookies';
import { Button } from '@mui/material';
import Toast from '@/components/toast';

export default function CookieManager() {
  const [showToast, setShowToast] = useState(false);
  const [clearToast, setClearToast] = useState(false);
  const cookies = useCookies();

  function getAllCookies() {
    const simpleCookie = ['token', 'email', 'bmi'];
    const compoundCookie = ['screening', 'medical'];
    for (const cookie of simpleCookie) {
      const data = cookies.get(cookie);
      if (data) console.log(`${cookie}: ${data}`);
    }
    for (const cookie of compoundCookie) {
      const data = cookies.get(cookie);
      if (data) {
        const json = JSON.parse(data);
        console.log(`${cookie}:`, json);
      }
    }
    setShowToast(true);
  }

  function getQuizCookie(quizType) {
    const data = cookies.get(quizType) ?? '{}';
    const json = JSON.parse(data);
    console.log(json);
    setShowToast(true);
  }

  function deleteAllCookies() {
    cookies.remove('token');
    cookies.remove('email');
    cookies.remove('bmi');
    cookies.remove('screening');
    cookies.remove('medical');
    setClearToast(true);
  }

  function deleteScreeningCookie() {
    cookies.remove('screening');
    setClearToast(true);
  }

  function deleteMedicalCookie() {
    cookies.remove('medical');
    setClearToast(true);
  }

  return (
    <main className="flex w-full flex-row justify-between">
      <div className="flex w-2/5 flex-col">
        <Button
          variant="outlined"
          className="md:text-xl"
          sx={{ mb: 2 }}
          onClick={getAllCookies}
        >
          Show All Cookies
        </Button>
        <Button
          variant="outlined"
          className="md:text-xl"
          sx={{ mb: 2 }}
          onClick={() => getQuizCookie('screening')}
        >
          Show Screening Cookie
        </Button>
        <Button
          variant="outlined"
          className="md:text-xl"
          onClick={() => getQuizCookie('medical')}
        >
          Show Medical Cookie
        </Button>
      </div>
      <div className="flex w-2/5 flex-col">
        <Button
          variant="outlined"
          className="md:text-xl"
          color="error"
          sx={{ mb: 2 }}
          onClick={deleteAllCookies}
        >
          Clear All Cookies
        </Button>
        <Button
          variant="outlined"
          className="md:text-xl"
          color="error"
          sx={{ mb: 2 }}
          onClick={deleteScreeningCookie}
        >
          Clear Screening Cookie
        </Button>
        <Button
          variant="outlined"
          className="md:text-xl"
          color="error"
          onClick={deleteMedicalCookie}
        >
          Clear Medical Cookie
        </Button>
      </div>
      <Toast
        message="Check the browser console for cookie data."
        severity="success"
        open={showToast}
        setOpen={setShowToast}
      />
      <Toast
        message="Cookie data cleared."
        severity="warning"
        open={clearToast}
        setOpen={setClearToast}
      />
    </main>
  );
}
