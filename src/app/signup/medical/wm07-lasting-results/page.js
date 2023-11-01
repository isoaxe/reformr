import ChooseOne from '@/components/quiz/choose-one';

export default function LastingResults() {
  const heading = ['Did you see', 'lasting results?', ''];
  const answerLabels = ['Yes', 'Sort of', 'Nope'];

  return (
    <ChooseOne
      heading={heading}
      questionId="wm07_lasting_results"
      answerLabels={answerLabels}
      nextPage="hope-and-change"
    />
  );
}
