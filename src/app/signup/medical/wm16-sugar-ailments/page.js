import ChooseMany from '@/components/quiz/choose-many';
import { chooseManyLabels } from '@/util/data';

export default function SugarAilments() {
  const heading = [
    'Have you ever been',
    'diagnosed',
    'with any of the following?',
  ];

  return (
    <ChooseMany
      heading={heading}
      questionId="wm16_sugar_ailments"
      answerLabels={chooseManyLabels.wm16_sugar_ailments}
      nextPage="wm17-other-ailments"
    />
  );
}
