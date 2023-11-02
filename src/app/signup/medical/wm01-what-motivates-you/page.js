import ChooseMultiple from '@/components/quiz/choose-multiple';
import { medicalQuizLabels } from '@/util/data';

export default function WhatMotivatesYou() {
  const heading = ['So...what', 'motivates you', 'to lose weight?'];

  return (
    <ChooseMultiple
      heading={heading}
      questionId="wm01_what_motivates_you"
      answerLabels={medicalQuizLabels.wm01_what_motivates_you}
      nextPage="wm02-when-last-ideal-weight"
    />
  );
}
