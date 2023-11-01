import ChooseMultiple from '@/components/quiz/choose-multiple';

export default function HealthVices() {
  const heading = ['Select all of the following that', 'apply to you.', ''];
  const answerLabels = [
    'Frequently under stress',
    'Feeling hopeless about my weight',
    'Get less sleep than I need',
    'Drink more than 1 alcoholic beverage per day',
    'Use recreational drugs',
    'Smoke tobacco',
    'Vape',
    'None of the above',
  ];

  return (
    <ChooseMultiple
      heading={heading}
      questionId="wm12_health_vices"
      answerLabels={answerLabels}
      nextPage="wm13-thyroid-activity"
    />
  );
}
