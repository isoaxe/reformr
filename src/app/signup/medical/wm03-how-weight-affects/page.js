'use client';

import { useState } from 'react';
import { Slider } from '@mui/material';

export default function HowWeightAffects() {
  const [answers, setAnswers] = useState({
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0,
  });

  const { A, B, C, D, E, F, G } = answers;

  function handleChange(e) {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  }

  function SliderWithLabel({ label, value, name }) {
    return (
      <div className="mb-3 flex flex-row items-center justify-between">
        <p className="w-64 text-lg md:text-xl xl:w-96 xl:text-2xl">{label}</p>
        <Slider
          valueLabelDisplay="auto"
          min={1}
          max={5}
          marks
          name={name}
          value={value}
          onChange={handleChange}
        />
      </div>
    );
  }

  return (
    <main className="m-auto w-full max-w-xl">
      <SliderWithLabel label="Physical health" value={A} name="A" />
      <SliderWithLabel label="Mental health" value={B} name="B" />
      <SliderWithLabel label="Socialising" value={C} name="C" />
      <SliderWithLabel label="Hobbies" value={D} name="D" />
      <SliderWithLabel label="Employment" value={E} name="E" />
      <SliderWithLabel label="Family activities" value={F} name="F" />
      <SliderWithLabel label="Exercise" value={G} name="G" />
    </main>
  );
}
