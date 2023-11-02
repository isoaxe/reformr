import ChooseOne from '@/components/quiz/choose-one';
import { medicalQuizLabels } from '@/util/data';

export default function FreqLossOfControl() {
  const heading = [
    'Do you ever feel like you have',
    'lost control over what you eat?',
    '',
  ];

  return (
    <ChooseOne
      heading={heading}
      questionId="wm04_freq_loss_of_control"
      answerLabels={medicalQuizLabels.wm04_freq_loss_of_control}
      nextPage="wm05-extent-food-dominates"
    />
  );
}
