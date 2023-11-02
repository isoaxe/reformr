import ChooseOne from '@/components/quiz/choose-one';

export default function FreqLossOfControl() {
  const heading = [
    'Do you ever feel like you have',
    'lost control over what you eat?',
    '',
  ];
  answerLabels = [
    'All the time',
    'Every day',
    'Most days',
    'Occasionally',
    'Rarely',
    'Never',
  ];

  return (
    <ChooseOne
      heading={heading}
      questionId="wm04_freq_loss_of_control"
      answerLabels={answerLabels}
      nextPage="wm05-extent-food-dominates"
    />
  );
}
