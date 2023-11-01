import ChooseMultiple from '@/components/quiz/choose-multiple';

export default function WhatMotivatesYou() {
  const heading = ['So...what', 'motivates you', 'to lose weight?'];
  const answerLabels = [
    'Physical appearance',
    'Physical health',
    'Mental health',
    'Feeling better day-to-day',
    'Family / friends',
    'Work',
    'Other',
  ];

  return (
    <ChooseMultiple
      heading={heading}
      questionId="wm01_what_motivates_you"
      answerLabels={answerLabels}
      nextPage="wm02-when-last-ideal-weight"
    />
  );
}
