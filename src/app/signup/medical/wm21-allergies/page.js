import BooleanExplain from '@/components/quiz/boolean-explain';

export default function Allergies() {
  const mainHeading = ['Do you have any', 'allergies?', ''];
  const textHeading = [
    'Please',
    'list all your allergies',
    'including the type and severity of reaction for each.',
  ];

  return (
    <BooleanExplain
      mainHeading={mainHeading}
      textHeading={textHeading}
      questionId="wm21_allergies"
      nextPage="wm22-past-procedures"
    />
  );
}
