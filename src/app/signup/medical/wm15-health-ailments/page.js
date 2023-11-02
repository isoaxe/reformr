import ChooseMultiple from '@/components/quiz/choose-multiple';
import { medicalQuizLabels } from '@/util/data';

export default function HealthAilments() {
  const heading = [
    'Have you ever been',
    'diagnosed',
    'with any of the following?',
  ];

  return (
    <ChooseMultiple
      heading={heading}
      questionId="wm15_health_ailments"
      answerLabels={medicalQuizLabels.wm15_health_ailments}
      nextPage="wm16-sugar-ailments"
    />
  );
}
