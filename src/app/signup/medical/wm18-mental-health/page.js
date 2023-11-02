import ChooseMultiple from '@/components/quiz/choose-multiple';
import { medicalQuizLabels } from '@/util/data';

export default function MentalHealth() {
  const heading = [
    'Are you',
    'currently experiencing',
    'any of the following?',
  ];
  const subheading = 'Your responses are confidential.';

  return (
    <ChooseMultiple
      heading={heading}
      subheading={subheading}
      questionId="wm18_mental_health"
      answerLabels={medicalQuizLabels.wm18_mental_health}
      nextPage="wm19-other-medical"
    />
  );
}
