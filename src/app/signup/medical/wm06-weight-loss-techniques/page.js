import ChooseMany from '@/components/quiz/choose-many';
import { chooseManyLabels } from '@/util/data';

export default function WeightLossTechniques() {
  const heading = [
    'If you have tried to lose weight before,',
    'what did you try?',
    '',
  ];

  return (
    <ChooseMany
      heading={heading}
      questionId="wm06_weight_loss_techniques"
      answerLabels={chooseManyLabels.wm06_weight_loss_techniques}
      nextPage="wm07-lasting-results"
    />
  );
}
