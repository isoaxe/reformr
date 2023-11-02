import ChooseMany from '@/components/quiz/choose-many';
import { medicalQuizLabels } from '@/util/data';

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
      answerLabels={medicalQuizLabels.wm20_medications}
      nextPage="wm21-allergies"
    />
  );
}
