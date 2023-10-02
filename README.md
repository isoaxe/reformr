# Reformr

A web app for Reformr, a New Zealand-based healthcare company focused on helping women lose weight with prescription medication.

## MVP v1

The version of the platform in place before development commenced is referred to as MVP v1. It is a drag-and-drop frontend hosted on Squarespace using [Typeform](https://www.typeform.com) to capture customer data in one large quiz. Responses are saved to a MS Word document on Google Drive for doctors to access and edit. A meeting is scheduled with that doctor using [Calendly](https://calendly.com). Following the meeting, payment is made via a Stripe integration that does not achieve the full desired functionality (no identity verification). There are about 10 paying customers at this point (early October 2023).

## MVP v2

Development has just started for the second phase and is projected to last 6 weeks (to 10th November 2023). A frontend will be built based on (but improving) the legacy Squarespace design. Next.js and TailwindCSS will be used to achieve this, making the site much more performant and SEO-optimised. The existing forms will be replaced by custom ones built with [Material UI](https://mui.com/material-ui) and data saved to [Firestore](https://firebase.google.com/products/firestore). User signup flow will be split so that an initial (much smaller) screening quiz is taken first followed by payment to minimise friction and increase lead conversions. Only after this does identity verification, the larger medical quiz and the telehealth consultation take place. Dashboards for the patient, doctor and pharmacist to manage payments, shipments, patient data and much else will have to be built for this stage too. Substantial marketing spend will precede launch which will occur after v2 is complete.
