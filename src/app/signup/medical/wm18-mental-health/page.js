import ChooseMultiple from '@/components/quiz/choose-multiple';

export default function MentalHealth() {
  const heading = [
    'Are you',
    'currently experiencing',
    'any of the following?',
  ];
  const subheading = 'Your responses are confidential.';
  const answerLabels = [
    'Depression',
    'Anxiety',
    'Bipolar disorder',
    'PTSD',
    'Schizophrenia or psychosis',
    'Self-harm',
    'Suicidal thoughts',
    'Previous suicide attempts',
    'None of the above',
  ];

  return (
    <ChooseMultiple
      heading={heading}
      subheading={subheading}
      questionId="wm18_mental_health"
      answerLabels={answerLabels}
      nextPage="wm19-other-medical"
    />
  );
}
