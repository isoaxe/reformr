import ChooseMany from '@/components/quiz/choose-many';
import { chooseManyLabels } from '@/util/data';

export default function HealthAilments() {
  const heading = [
    'Have you ever been',
    'diagnosed',
    'with any of the following?',
  ];

  return (
    <ChooseMany
      heading={heading}
      questionId="wm15_health_ailments"
      answerLabels={chooseManyLabels.wm15_health_ailments}
      nextPage="wm16-sugar-ailments"
    />
  );
}
