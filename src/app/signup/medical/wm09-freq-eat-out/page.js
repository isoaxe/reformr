import ChooseOne from '@/components/quiz/choose-one';
import { medicalQuizLabels } from '@/util/data';

export default function FreqEatOut() {
  const heading = ['How many times a week do you', 'eat out or order in?', ''];

  return (
    <ChooseOne
      heading={heading}
      questionId="wm09_freq_eat_out"
      answerLabels={medicalQuizLabels.wm09_freq_eat_out}
      nextPage="wm10-physical-fitness"
    />
  );
}
