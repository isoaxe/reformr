import Range from '@/components/quiz/range';

export default function PhysicalFitness() {
  const heading = [
    'How would you rate your',
    'physical fitness',
    'on a scale of 1 to 10?',
  ];
  const subheading = 'Rank from 1 (worst) to 10 (best).';

  return (
    <Range
      heading={heading}
      subheading={subheading}
      questionId="wm10_physical_fitness"
      nextPage="wm11-amount-of-exercise"
    />
  );
}
