import ChooseMultiple from '@/components/quiz/choose-multiple';

export default function ThyroidActivity() {
  const heading = [
    'Have you ever been',
    'diagnosed',
    'with either of the following?',
  ];
  const answerLabels = [
    'Hyperthyroidism (overactive thyroid)',
    'Hypothyroidism (underactive thyroid)',
    'Neither of these',
  ];

  return (
    <ChooseMultiple
      heading={heading}
      questionId="wm13_thyroid_activity"
      answerLabels={answerLabels}
      nextPage="wm14-thyroid-tumor"
    />
  );
}
