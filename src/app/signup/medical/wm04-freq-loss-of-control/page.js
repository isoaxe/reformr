import RadioList from '@/components/quiz/radio-list';

export default function FreqLossOfControl() {
  const heading = [
    'Do you ever feel like you have',
    'lost control over what you eat?',
    '',
  ];
  const answerLabels = [
    'All the time',
    'Every day',
    'Most days',
    'Occasionally',
    'Rarely',
    'Never',
  ];

  return (
    <RadioList
      heading={heading}
      questionId="wm04_freq_loss_of_control"
      answerLabels={answerLabels}
      nextPage="wm05-extent-of-food-domination"
    />
  );
}
