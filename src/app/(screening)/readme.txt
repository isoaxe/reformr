This route group contains a page for each screening question. The naming convention is as follows:

wsXX
w => Weight loss quiz. This is to allow for other quizzes related to more products in the future.
s => Screening quiz. This differentiates it from the medical quiz and other quiz types that may be introduced in the future.
XX => An integer beginning at 01. Increments with each new question.

Current question list:
Question 01 => ws01-accept-terms
Question 02 => ws02-first-name
Question 03 => ws03-last-name
Question 04 => ws04-email
Question 05 => ws05-mobile-number
Question 06 => ws06-age
Question 07 => ws07-dob
Question 08 => ws08-sex-at-birth
Question 09 => ws09-height
Question 10 => ws10-weight

After this the patients BMI gets displayed which can lead down 3 different paths (pass / fail / needs review).

These are the initial ordering of questions. If any get moved around they will be updated in the list above so we have a reference. If any more get added, the numbering system will continue to increment. This will be the case even if numbers before are 'freed up' due to the removal of a question that was previously included.