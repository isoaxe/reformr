import ChooseMultiple from '@/components/quiz/choose-multiple';

export default function ThyroidTumor() {
  const heading = [
    'Have you or your family ever been diagnosed with a',
    'thyroid tumor?',
    '',
  ];
  const answerLabels = ['I have', 'Someone in my family has', 'Neither option'];

  return (
    <ChooseMultiple
      heading={heading}
      questionId="wm14_thyroid_tumor"
      answerLabels={answerLabels}
      nextPage="wm15-health-ailments"
    />
  );
}
