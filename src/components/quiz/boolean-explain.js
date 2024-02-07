'use client';

import { useState, useEffect } from 'react';
import { Radio, RadioGroup, Typography, FormControlLabel } from '@mui/material';
import { TextField } from '@mui/material';
import Button from '@/components/quiz/button';
import { useCookieState } from '@/util/hooks';

/* A variant of ChooseOne, this opens a text field if Yes is selected. */
export default function BooleanExplain(props) {
  const { mainHeading, textHeading } = props;
  const { questionId, nextPage } = props;
  const [answer, setAnswer] = useState({ response: '', moreInfo: '' });

  useCookieState('medical', questionId, setAnswer);

  useEffect(() => {
    if (answer.response === 'No') {
      setAnswer({ response: 'No', moreInfo: '' });
    }
  }, [answer.response]);

  function RadioOption({ label }) {
    return (
      <FormControlLabel
        value={label} // value saved can be the same as label
        control={<Radio />}
        label={
          <Typography className="!mt-1 !text-lg md:!text-xl xl:!text-2xl">
            {label}
          </Typography>
        }
      />
    );
  }

  return (
    <main className="mx-auto flex max-w-2xl flex-col">
      <h1 className="mb-6">
        {mainHeading[0]}
        <span className="font-semibold"> {mainHeading[1]} </span>
        {mainHeading[2]}
      </h1>
      <RadioGroup
        value={answer.response}
        onChange={(e) => setAnswer({ ...answer, response: e.target.value })}
        sx={{ mb: 3, width: 'fit-content' }}
      >
        <RadioOption label="Yes" />
        <RadioOption label="No" />
      </RadioGroup>
      {answer.response === 'Yes' && (
        <>
          <h2 className="my-4 text-lg md:text-xl xl:text-2xl">
            {textHeading[0]}
            <span className="font-semibold"> {textHeading[1]} </span>
            {textHeading[2]}
          </h2>
          <TextField
            variant="standard"
            value={answer.moreInfo}
            onChange={(e) => setAnswer({ ...answer, moreInfo: e.target.value })}
            sx={{ mb: 3 }}
            InputProps={{ className: '!text-xl md:!text-2xl xl:!text-3xl' }}
          />
        </>
      )}
      <Button
        text="Ok"
        link={'./' + nextPage}
        state={{ [questionId]: answer }}
        isDisabled={
          !(answer.response === 'Yes' && answer.moreInfo.length > 2) &&
          answer.response !== 'No'
        }
        quiz="medical"
      />
    </main>
  );
}
