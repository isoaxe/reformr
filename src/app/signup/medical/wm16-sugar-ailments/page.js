import ChooseMultiple from '@/components/quiz/choose-multiple';

export default function SugarAilments() {
  const heading = [
    'Have you ever been',
    'diagnosed',
    'with any of the following?',
  ];
  const answerLabels = [
    'Diabetes (Type 2)',
    'Diabetes (Type 1)',
    'Diabetes (Other)',
    'Pre-diabetes',
    'High blood sugar (Hyperglycemia)',
    'Low blood sugar (Hypoglycemia)',
    'None of these issues',
  ];

  return (
    <ChooseMultiple
      heading={heading}
      questionId="wm16_sugar_ailments"
      answerLabels={answerLabels}
      nextPage="wm17-other-ailments"
    />
  );
}
