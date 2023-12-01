'use client';

import ChooseMany from '@/components/quiz/choose-many';
import { chooseManyLabels } from '@/util/data';
import { useAuth, useRedirectNoUser } from '@/util/hooks';

export default function PastProcedures() {
  const { user } = useAuth();
  useRedirectNoUser(user);

  const heading = [
    'Last question! Have you ever had any of the following',
    'weight loss procedures?',
    '',
  ];

  return (
    <ChooseMany
      heading={heading}
      questionId="wm22_past_procedures"
      answerLabels={chooseManyLabels.wm22_past_procedures}
      nextPage="../book-telehealth"
    />
  );
}
