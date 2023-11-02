import ChooseMultiple from '@/components/quiz/choose-multiple';
import { medicalQuizLabels } from '@/util/data';

export default function WeightLossTechniques() {
  const heading = [
    'If you have tried to lose weight before,',
    'what did you try?',
    '',
  ];

  return (
    <ChooseMultiple
      heading={heading}
      questionId="wm06_weight_loss_techniques"
      answerLabels={medicalQuizLabels.wm06_weight_loss_techniques}
      nextPage="wm07-lasting-results"
    />
  );
}
