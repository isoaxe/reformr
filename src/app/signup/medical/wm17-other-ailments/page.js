import ChooseMultiple from '@/components/quiz/choose-multiple';
import { medicalQuizLabels } from '@/util/data';

export default function OtherAilments() {
  const heading = [
    'Have you ever been',
    'diagnosed',
    'with any of the following?',
  ];

  return (
    <ChooseMultiple
      heading={heading}
      questionId="wm17_other_ailments"
      answerLabels={medicalQuizLabels.wm17_other_ailments}
      nextPage="wm18-mental-health"
    />
  );
}
