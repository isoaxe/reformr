'use client';

import { useState, useEffect } from 'react';
import { useCookies } from 'next-client-cookies';
import { useRouter } from 'next/navigation';
import { LoadingButton } from '@mui/lab';
import NumberInput from '@/components/quiz/number-input';
import Toast from '@/components/toast';
import { useCookieState, useKeyPress } from '@/util/hooks';
import { setQuizCookie } from '@/util/helpers';

/* Collect weight of the user in kg as an integer. */
export default function Weight() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [nextPage, setNextPage] = useState('/');
  const [isLoading, setLoading] = useState(false);
  const [isInvalid, setInvalid] = useState(true);
  const [bmi, setBmi] = useState(null);
  const [showFailure, setShowFailure] = useState(false);
  const cookies = useCookies();
  const router = useRouter();

  useCookieState('screening', 'weight', setWeight);
  useCookieState('screening', 'height', setHeight);
  useKeyPress(saveScreeningData);

  async function saveScreeningData() {
    setLoading(true);
    setQuizCookie('screening', { weight }, cookies);
    const screening = cookies.get('screening');
    const token = cookies.get('token');
    /* Save BMI as a separate cookie for next page. */
    cookies.set('bmi', bmi, { sameSite: 'strict' });
    try {
      /* Pass screening cookie and token generated after reCAPTCHA success. */
      const options = {
        method: 'POST',
        body: JSON.stringify({ screening, bmi, token }),
        headers: { 'content-type': 'application/json' },
      };
      const res = await fetch('/api/screening', options);
      const { success } = await res.json();
      if (success) router.push(nextPage);
      else setShowFailure(true);
    } catch (err) {
      console.error('Error saving screening data: ', err);
    }
    setLoading(false);
  }

  useEffect(() => {
    const weightInt = parseInt(weight); // was a string, convert to int
    if (weightInt < 50 || weightInt > 500) setInvalid(true);
    else setInvalid(false);
  }, [weight]);

  useEffect(() => {
    /* Calculate BMI and select path based on this. */
    const heightInMetres = height / 100;
    const updatedBmi = parseFloat((weight / heightInMetres ** 2).toFixed(2));
    setBmi(updatedBmi);
    if (updatedBmi < 27) setNextPage('./bmi-low');
    else if (updatedBmi > 30) setNextPage('./bmi-high');
    else setNextPage('./bmi-mid');
  }, [height, weight]);

  return (
    <main className="mx-auto flex flex-col">
      <p className="mb-6">
        What is your <span className="font-semibold">current weight</span> in
        kilograms (kg)?
      </p>
      <NumberInput
        number={weight}
        setNumber={setWeight}
        isError={isInvalid}
        placeholder={'85'}
      />
      <LoadingButton
        onClick={saveScreeningData}
        variant="outlined"
        className="w-fit text-lg md:text-xl"
        disabled={isInvalid || !weight} // enabled if weight is 50-500kg
        loading={isLoading}
      >
        Ok
      </LoadingButton>
      <Toast
        message="There was an issue saving data from the screening quiz. Please send us a message via the contact page."
        severity="error"
        open={showFailure}
        setOpen={setShowFailure}
        duration={6}
      />
    </main>
  );
}
