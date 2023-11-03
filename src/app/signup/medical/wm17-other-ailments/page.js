import ChooseMany from '@/components/quiz/choose-many';
import { chooseManyLabels } from '@/util/data';

export default function OtherAilments() {
  const heading = [
    'Have you ever been',
    'diagnosed',
    'with any of the following?',
  ];

  return (
    <ChooseMany
      heading={heading}
      questionId="wm17_other_ailments"
      answerLabels={chooseManyLabels.wm17_other_ailments}
      nextPage="wm18-mental-health"
    />
  );
}
