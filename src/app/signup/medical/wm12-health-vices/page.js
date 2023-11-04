import ChooseMany from '@/components/quiz/choose-many';
import { chooseManyLabels } from '@/util/data';

export default function HealthVices() {
  const heading = ['Select all of the following that', 'apply to you.', ''];

  return (
    <ChooseMany
      heading={heading}
      questionId="wm12_health_vices"
      answerLabels={chooseManyLabels.wm12_health_vices}
      nextPage="health-and-treatment"
    />
  );
}
