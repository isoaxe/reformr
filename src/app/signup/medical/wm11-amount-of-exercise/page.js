import RadioList from '@/components/quiz/choose-one';

export default function AmountOfExercise() {
  const heading = [
    'How may hours of',
    'moderate physical activity',
    'do you do in a week?',
  ];
  const subheading =
    'Moderate physical activity is any exercise that gets your heart rate up, and can be different for each individual.';
  const answerLabels = ['0 hours', '1-2 hours', '3-4 hours', '5+ hours'];

  return (
    <RadioList
      heading={heading}
      subheading={subheading}
      questionId="wm11_amount_of_exercise"
      answerLabels={answerLabels}
      nextPage="wm12-current-health-vices"
    />
  );
}
