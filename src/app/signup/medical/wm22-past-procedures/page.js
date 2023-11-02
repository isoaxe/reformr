import ChooseMany from '@/components/quiz/choose-many';
import { medicalQuizLabels } from '@/util/data';

export default function PastProcedures() {
  const heading = [
    'Last question! Have you ever had any of the following',
    'weight loss procedures?',
    '',
  ];

  return (
    <ChooseMany
      heading={heading}
      questionId="wm22_past_procedures"
      answerLabels={medicalQuizLabels.wm22_past_procedures}
      nextPage="../book-telehealth"
    />
  );
}
