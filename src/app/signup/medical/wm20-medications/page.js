import ChooseMultiple from '@/components/quiz/choose-multiple';

export default function Medications() {
  const heading = [
    'Do you currently take any',
    'medications or supplements?',
    '',
  ];
  const answerLabels = [
    'Anti-inflammatories',
    'Heart medications',
    'Diuretics',
    'Diabetes medications',
    'Insulin',
    'Anti-convulsants',
    'Lithium',
    'Anti-depressants',
    'Anxiety medication',
    'Other medications',
    'Other supplements',
    'None of the above',
  ];

  return (
    <ChooseMultiple
      heading={heading}
      questionId="wm20_medications"
      answerLabels={answerLabels}
      nextPage="wm21-allergies"
    />
  );
}
