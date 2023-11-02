import BooleanExplain from '@/components/quiz/boolean-explain';

export default function OtherMedical() {
  const mainHeading = [
    'Have you ever been diagnosed with any',
    'other medical conditions?',
    '',
  ];
  const textHeading = [
    'Please provide',
    'more information',
    'about your other medical conditions.',
  ];

  return (
    <BooleanExplain
      mainHeading={mainHeading}
      textHeading={textHeading}
      questionId="wm19_other_medical"
      nextPage="wm20-medications"
    />
  );
}
