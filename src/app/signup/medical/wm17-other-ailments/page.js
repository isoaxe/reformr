import ChooseMultiple from '@/components/quiz/choose-multiple';

export default function OtherAilments() {
  const heading = [
    'Have you ever been',
    'diagnosed',
    'with any of the following?',
  ];
  const answerLabels = [
    'High blood pressure (Hypertension)',
    'High cholesterol or triglycerides',
    'Obstructive sleep apnoea',
    'Osteoarthritis or weight-related joint pain',
    'Heart disease (heart failure, heart attack, or other serious heart problem)',
    'Palpatations or abnormal heart rhythm',
    'Epilepsy / seizures',
    'GORD / heartburn / acid reflux',
    'Cancer',
    'None of these',
  ];

  return (
    <ChooseMultiple
      heading={heading}
      questionId="wm17_other_ailments"
      answerLabels={answerLabels}
      nextPage="wm18-mental-health"
    />
  );
}
