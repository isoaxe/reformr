import Range from '@/components/quiz/range';

export default function ExtentFoodDominates() {
  const heading = [
    'To what extent would you say that food',
    'dominates your life?',
    '',
  ];
  const subheading = 'Rank from 1 (minimum impact) to 10 (maximum impact).';

  return (
    <Range
      heading={heading}
      subheading={subheading}
      questionId="wm05_extent_food_dominates"
      nextPage="wm06-weight-loss-techniques"
    />
  );
}
