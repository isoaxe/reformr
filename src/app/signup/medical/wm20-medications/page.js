import ChooseMany from '@/components/quiz/choose-many';
import { chooseManyLabels } from '@/util/data';

export default function Medications() {
  const heading = [
    'Do you currently take any',
    'medications or supplements?',
    '',
  ];

  return (
    <ChooseMany
      heading={heading}
      questionId="wm20_medications"
      answerLabels={chooseManyLabels.wm20_medications}
      nextPage="wm21-allergies"
    />
  );
}
