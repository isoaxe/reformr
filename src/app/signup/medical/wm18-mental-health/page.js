import ChooseMany from '@/components/quiz/choose-many';
import { chooseManyLabels } from '@/util/data';

export default function MentalHealth() {
  const heading = [
    'Are you',
    'currently experiencing',
    'any of the following?',
  ];
  const subheading = 'Your responses are confidential.';

  return (
    <ChooseMany
      heading={heading}
      subheading={subheading}
      questionId="wm18_mental_health"
      answerLabels={chooseManyLabels.wm18_mental_health}
      nextPage="wm19-other-medical"
    />
  );
}
