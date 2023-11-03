import ChooseMany from '@/components/quiz/choose-many';
import { chooseManyLabels } from '@/util/data';

export default function WhatMotivatesYou() {
  const heading = ['So...what', 'motivates you', 'to lose weight?'];

  return (
    <ChooseMany
      heading={heading}
      questionId="wm01_what_motivates_you"
      answerLabels={chooseManyLabels.wm01_what_motivates_you}
      nextPage="wm02-when-last-ideal-weight"
    />
  );
}
