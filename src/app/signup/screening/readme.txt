This route contains a page for each screening question. The naming convention is as follows:

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
Question 06 => ws06-dob
Question 07 => ws07-sex-at-birth
Question 08 => ws08-height
Question 09 => ws09-weight

After this the patients BMI gets displayed which can lead down 3 different paths (low / mid / high BMI):
The first ends the quiz as the user is unsuitable for the program (BMI < 27).
The second continues with a subset of the medical quiz that screens for preexisting conditions (BMI 27-30). If the user has one, they continue down the high BMI route. If not, they terminate the signup as with the low-BMI route.
The third goes to account creation, payment, medical quiz, scheduling of telehealth appointment and finally navigation to the patient dashboard (BMI > 30).

These are the initial ordering of questions. If any get moved around they will be updated in the list above so we have a reference. If any more get added, the numbering system will continue to increment. This will be the case even if numbers before are 'freed up' due to the removal of a question that was previously included.