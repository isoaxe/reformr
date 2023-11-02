import ChooseMultiple from '@/components/quiz/choose-multiple';
import { medicalQuizLabels } from '@/util/data';

export default function HealthVices() {
  const heading = ['Select all of the following that', 'apply to you.', ''];

  return (
    <ChooseMultiple
      heading={heading}
      questionId="wm12_health_vices"
      answerLabels={medicalQuizLabels.wm12_health_vices}
      nextPage="health-and-treatment"
    />
  );
}
