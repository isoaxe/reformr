import RadioList from '@/components/quiz/radio-list';

export default function FreqEatOut() {
  const heading = ['How many times a week do you', 'eat out or order in?', ''];
  const answerLabels = [
    'Multiple times a day',
    'At least once a day',
    'Between 4-6 days',
    'Between 2-3 days',
    'Once or less',
  ];

  return (
    <RadioList
      heading={heading}
      questionId="wm09_freq_eat_out"
      answerLabels={answerLabels}
      nextPage="wm10-physical-fitness"
    />
  );
}
