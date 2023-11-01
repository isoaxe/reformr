import ChooseMultiple from '@/components/quiz/choose-multiple';

export default function WeightLossTechniques() {
  const heading = [
    'If you have tried to lose weight before,',
    'what did you try?',
    '',
  ];
  const answerLabels = [
    'Diet',
    'Exercise',
    'Fasting',
    'Meal replacement shakes',
    'Prescription medication',
    'Surgery',
    'None of the above',
  ];

  return (
    <ChooseMultiple
      heading={heading}
      questionId="wm06_weight_loss_techniques"
      answerLabels={answerLabels}
      nextPage="wm07-lasting-results"
    />
  );
}
