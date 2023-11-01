import RadioList from '@/components/quiz/radio-list';

export default function LastingResults() {
  const heading = ['Did you see', 'lasting results?', ''];
  const answerLabels = ['Yes', 'Sort of', 'Nope'];

  return (
    <RadioList
      heading={heading}
      questionId="wm07_lasting_results"
      answerLabels={answerLabels}
      nextPage="hope-and-change"
    />
  );
}
