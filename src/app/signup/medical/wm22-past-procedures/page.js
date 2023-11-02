import ChooseMultiple from '@/components/quiz/choose-multiple';

export default function PastProcedures() {
  const heading = [
    'Last question! Have you ever had any of the following',
    'weight loss procedures?',
    '',
  ];
  const answerLabels = [
    'Lab band',
    'Roux-en-Y gastric bypass',
    'Sleeve gastrectomy',
    'Gastric balloon',
    'Other',
    'None',
  ];

  return (
    <ChooseMultiple
      heading={heading}
      questionId="wm22_past_procedures"
      answerLabels={answerLabels}
      nextPage="../book-telehealth"
    />
  );
}
