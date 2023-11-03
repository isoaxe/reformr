import ChooseMany from '@/components/quiz/choose-many';
import { chooseManyLabels } from '@/util/data';

export default function ThyroidActivity() {
  const heading = [
    'Have you ever been',
    'diagnosed',
    'with either of the following?',
  ];

  return (
    <ChooseMany
      heading={heading}
      questionId="wm13_thyroid_activity"
      answerLabels={chooseManyLabels.wm13_thyroid_activity}
      nextPage="wm14-thyroid-tumor"
    />
  );
}
