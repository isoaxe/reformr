'use client';

import { useState } from 'react';
import { Slider } from '@mui/material';
import Button from '@/components/quiz/button';
import { useCookieState } from '@/util/hooks';
import { medicalQuizLabels } from '@/util/data';

/* Multiple questions with a 1-5 range response. */
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

  useCookieState('medical', 'wm03_how_weight_affects', setAnswers);

  function SliderWithLabel({ label, value, name }) {
    return (
      <div className="mb-3 flex flex-row items-center justify-between">
        <p
          className={`w-64 text-lg md:text-xl xl:w-96 xl:text-2xl ${
            !answers[name] ? 'text-slate-400' : ''
          }`}
        >
          {label}
        </p>
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
    <main className="m-auto max-w-2xl">
      <p className="mb-2">
        How much would you say your weight is
        <span className="font-semibold"> affecting the following:</span>
      </p>
      <p className="mb-14 text-lg text-slate-700 md:text-xl xl:text-2xl">
        Rank each from 1 (minimum impact) to 5 (maximum impact).
      </p>
      <SliderWithLabel
        label={medicalQuizLabels.wm03_how_weight_affects[0]}
        value={A}
        name="A"
      />
      <SliderWithLabel
        label={medicalQuizLabels.wm03_how_weight_affects[1]}
        value={B}
        name="B"
      />
      <SliderWithLabel
        label={medicalQuizLabels.wm03_how_weight_affects[2]}
        value={C}
        name="C"
      />
      <SliderWithLabel
        label={medicalQuizLabels.wm03_how_weight_affects[3]}
        value={D}
        name="D"
      />
      <SliderWithLabel
        label={medicalQuizLabels.wm03_how_weight_affects[4]}
        value={E}
        name="E"
      />
      <SliderWithLabel
        label={medicalQuizLabels.wm03_how_weight_affects[5]}
        value={F}
        name="F"
      />
      <SliderWithLabel
        label={medicalQuizLabels.wm03_how_weight_affects[6]}
        value={G}
        name="G"
      />
      <div className="invisible h-14">This is a spacer - for layout only</div>
      <Button
        text="Ok"
        link="./wm04-freq-loss-of-control"
        state={{ wm03_how_weight_affects: answers }}
        isDisabled={!A || !B || !C || !D || !E || !F || !G}
        quiz="medical"
      />
    </main>
  );
}
