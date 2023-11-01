import Range from '@/components/quiz/range';

export default function HowHealthy() {
  const heading = [
    'In general, how',
    'healthy',
    'would you say your current diet is?',
  ];
  const subheading = 'Rank from 1 (least healthy) to 10 (most healthy).';

  return (
    <Range
      heading={heading}
      subheading={subheading}
      questionId="wm08_how_healthy"
      nextPage="wm09-freq-eat-out"
    />
  );
}
