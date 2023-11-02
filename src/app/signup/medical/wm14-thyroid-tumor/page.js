import ChooseMany from '@/components/quiz/choose-many';
import { medicalQuizLabels } from '@/util/data';

export default function ThyroidTumor() {
  const heading = [
    'Have you or your family ever been diagnosed with a',
    'thyroid tumor?',
    '',
  ];

  return (
    <ChooseMany
      heading={heading}
      questionId="wm14_thyroid_tumor"
      answerLabels={medicalQuizLabels.wm14_thyroid_tumor}
      nextPage="wm15-health-ailments"
    />
  );
}
