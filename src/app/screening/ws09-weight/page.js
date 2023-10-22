'use client';

import { useState, useEffect } from 'react';
import { useCookies } from 'next-client-cookies';
import Button from '@/components/quiz/button';
import NumberInput from '@/components/quiz/number-input';
import { useCookieState } from '@/util/hooks';

/* Collect weight of the user in kg as an integer. */
export default function Weight() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [nextPage, setNextPage] = useState('/');
  const [isInvalid, setInvalid] = useState(true);
  const [bmi, setBmi] = useState(null);
  const cookies = useCookies();

  useCookieState('screening', 'weight', setWeight);
  useCookieState('screening', 'height', setHeight);

  async function saveScreeningData() {
    const cookie = cookies.get('screening');
    /* Save BMI as a separate cookie for next page. */
    cookies.set('bmi', bmi, { sameSite: 'strict' });
    try {
      /* Pass screening cookie and token generated after reCAPTCHA success. */
      fetch(`/api/screening?cookie=${cookie}&bmi=${bmi}`);
    } catch (err) {
      console.error('Error saving screening data: ', err);
    }
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
    if (updatedBmi < 27) setNextPage('/screening/bmi-low');
    else if (updatedBmi > 30) setNextPage('/screening/bmi-high');
    else setNextPage('/screening/bmi-mid');
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
      <div onClick={saveScreeningData}>
        <Button
          text="Ok"
          link={nextPage}
          state={{ weight }}
          isDisabled={isInvalid || !weight} // enabled if weight is 50-500kg
          quiz="screening"
        />
      </div>
    </main>
  );
}
