/* Stripe keys for the SquareSpace account. */
const isLive = false; // TODO: Update to true when ready to go live
export const isCli = false;
export const STRIPE_UID = 'cus_OxvzdleqcuOYP6'; // TODO: Update if test data reset
export const FIRESTORE_DOC_ID = 'Messi-895332'; // TODO: Update if test data reset
// TODO: Add a redirect to patient dashboard after Calendly booking is complete.

const stripePublicKeyTest =
  'pk_test_51MercyFPKktQy8tpfcK2JfsIQcXMMpvl04HKmGpsYXwEvSziRHaUvxPGKnBu7khVchuIBj2vzLHuaOj9I0xLxVJP00a1f3fm93';
const stripePublicKeyLive =
  'pk_live_51MercyFPKktQy8tpvFWJwqLJByyrMptoggDwhmEt5yz5Q4omJ5RoZvPyWoukSMx9gSUIV0DwWFAyV2wHnMhKXOID00zz3NEMqc';
export const STRIPE_PUBLIC_KEY = isLive
  ? stripePublicKeyLive
  : stripePublicKeyTest;

const stripeSecretKeyTest = process.env.STRIPE_SECRET_KEY_TEST;
const stripeSecretKeyLive = process.env.STRIPE_SECRET_KEY_LIVE;
export const STRIPE_SECRET_KEY = isLive
  ? stripeSecretKeyLive
  : stripeSecretKeyTest;

const stripeInvoiceWebhookSecretLocal =
  process.env.STRIPE_INVOICE_WEBHOOK_SECRET_LOCAL;
const stripeInvoiceWebhookSecretTest =
  process.env.STRIPE_INVOICE_WEBHOOK_SECRET_TEST;
const stripeInvoiceWebhookSecretLive =
  process.env.STRIPE_INVOICE_WEBHOOK_SECRET_LIVE;
export const STRIPE_INVOICE_WEBHOOK_SECRET = isLive
  ? stripeInvoiceWebhookSecretLive
  : isCli
  ? stripeInvoiceWebhookSecretLocal
  : stripeInvoiceWebhookSecretTest;

const stripeIdentityWebhookSecretLocal =
  process.env.STRIPE_IDENTITY_WEBHOOK_SECRET_LOCAL;
const stripeIdentityWebhookSecretTest =
  process.env.STRIPE_IDENTITY_WEBHOOK_SECRET_TEST;
const stripeIdentityWebhookSecretLive =
  process.env.STRIPE_IDENTITY_WEBHOOK_SECRET_LIVE;
export const STRIPE_IDENTITY_WEBHOOK_SECRET = isLive
  ? stripeIdentityWebhookSecretLive
  : isCli
  ? stripeIdentityWebhookSecretLocal
  : stripeIdentityWebhookSecretTest;

const stripePriceIdTest = 'price_1O9rYQFPKktQy8tpBuZCaJAw';
const stripePriceIdLive = 'price_1NlkQrFPKktQy8tpqjntJXwq';
export const STRIPE_PRICE_ID = isLive ? stripePriceIdLive : stripePriceIdTest;
