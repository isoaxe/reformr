# Reformr

A web app for Reformr, a New Zealand-based healthcare company focused on helping women lose weight with prescription medication.

## Stages of Development

Outlined below are three stages of development; MVP v1, v2 and v3. The first is a no-code solution that is the true MVP with a very limited user base. The second migrates to a modern development stack with data moving away from third parties and centrally hosted on a database for much better potential to scale long-term. The third stage covers expansion to functionality and engagement integrations to significantly improve the v2 product.

### MVP v1

The version of the platform in place before development commenced is referred to as MVP v1. It is a drag-and-drop frontend hosted on Squarespace using [Typeform](https://www.typeform.com) to capture customer data in one large quiz. Responses are saved to a MS Word document on Google Drive for doctors to access and edit. A meeting is scheduled with that doctor using [Calendly](https://calendly.com). Following the meeting, payment is made via a Stripe integration that does not achieve the full desired functionality (no identity verification). There are about 10 paying customers at this point (early October 2023).

### MVP v2

Development has just started for the second phase and is projected to last 6 weeks (to 10th November 2023). A frontend will be built based on (but improving) the legacy Squarespace design. Next.js and TailwindCSS will be used to achieve this, making the site much more performant and SEO-optimised. The existing forms will be replaced by custom ones built with [Material UI](https://mui.com/material-ui) and data saved to [Firestore](https://firebase.google.com/products/firestore). User signup flow will be split so that an initial (much smaller) screening quiz is taken first followed by payment to minimise friction and increase lead conversions. Only after this does identity verification, the larger medical quiz and the telehealth consultation take place. Dashboards for the patient, doctor and pharmacist to manage payments, shipments, patient data and much else will have to be built for this stage too. Substantial marketing spend will precede launch which will occur after v2 is complete.

### MVP v3

Development for this phase will commence immediately following the launch of MVP v2 and could last until the end of January 2024. Unlike the previous stage, this will be a [CI/CD flow](https://en.wikipedia.org/wiki/CI/CD) with prioritisation of new features being discussed amongst the team on an _ad hoc_ basis. As with the previous stage, all tasks will be managed via the Trello board and were outlined in less detail in the deliverables agreement. Some of the items will be to update and improve all UI elements including the public-facing frontend, the forms and dashboards. There will also be significant expansion to existing features, most notably on the dashboards. Broad integration with [Klaviyo](https://www.klaviyo.com) for email notifications at various stages will also be required. Other integrations will be [Zendesk](https://www.zendesk.com) for a chatbot, [software for referrals](https://www.referralcandy.com) and something to generate medical and lab documents using data from Firestore. [Firebase Analytics](https://firebase.google.com/products/analytics) will also be required to track conversions and other data. [SSO](https://auth0.com/docs/authenticate/single-sign-on) at login will also be implemented in addition to various other follow-up patient quizzes. Finally, a [headless CMS](https://strapi.io) will be hosted on a [VPS](https://cloud.google.com/learn/what-is-a-virtual-private-server) with [DigitalOcean](https://www.digitalocean.com/products/droplets) (via a separate repo and hosted on a subdomain).

## Setup

### `npm install`

Clone or fork the project, then run the command from the project directory.

### `npm run dev`

Start the app locally in development mode.

### `npm run build && npm run start`

Run a fresh build and then start the app in production mode. Useful to do before deploying changes to ensure everything is working as expected.

## Local Access

Visit [localhost](http://localhost:3000) after running the `dev` or `start` commands below to view the app in the browser.
