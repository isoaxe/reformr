import ChooseMultiple from '@/components/quiz/choose-multiple';

export default function HealthAilments() {
  const heading = [
    'Have you ever been',
    'diagnosed',
    'with any of the following?',
  ];
  const answerLabels = [
    'Fatty liver',
    'Abnormal liver function',
    'Pancreatitis',
    'Other issues with pancreas',
    'Gallstones',
    'Inflamed gallbladder (cholecystitis)',
    'Kidney disease / reduced kidney function',
    'None of these',
  ];

  return (
    <ChooseMultiple
      heading={heading}
      questionId="wm15_health_ailments"
      answerLabels={answerLabels}
      nextPage="wm16-sugar-ailments"
    />
  );
}
