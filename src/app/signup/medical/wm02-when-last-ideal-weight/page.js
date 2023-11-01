import ChooseOne from '@/components/quiz/choose-one';

export default function WhenLastIdealWeight() {
  const heading = ['When were you last at your', 'ideal weight?', ''];
  const answerLabels = [
    'Less than 1 year ago',
    '1-5 years ago',
    '6-10 years ago',
    'More than 10 years ago',
  ];

  return (
    <ChooseOne
      heading={heading}
      questionId="wm02_when_last_ideal_weight"
      answerLabels={answerLabels}
      nextPage="wm03-how-weight-affects"
    />
  );
}
