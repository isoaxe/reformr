import ChooseMultiple from '@/components/quiz/choose-multiple';
import { medicalQuizLabels } from '@/util/data';

export default function ThyroidActivity() {
  const heading = [
    'Have you ever been',
    'diagnosed',
    'with either of the following?',
  ];

  return (
    <ChooseMultiple
      heading={heading}
      questionId="wm13_thyroid_activity"
      answerLabels={medicalQuizLabels.wm13_thyroid_activity}
      nextPage="wm14-thyroid-tumor"
    />
  );
}
