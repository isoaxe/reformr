const isLive = false; // TODO: Toggle to true when ready to go live
const isDev = process.env.NODE_ENV === 'development';

/* Stripe and Firestore details used when testing via the CLI. */
export const isCli = false;
/* Update the following values if test data reset */
export const STRIPE_UID = 'cus_PBvZjvVV5aWQy1';
export const FIRESTORE_DOC_ID = 'Harris-820398';
export const PAYMENT_METHOD_ID = 'pm_1ONXjaFPKktQy8tpj8pYmahw';
// TODO: Add a redirect to patient dashboard after Calendly booking is complete.

/* Stripe keys for the SquareSpace account. */
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
  : isDev
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
  : isDev
  ? stripeIdentityWebhookSecretLocal
  : stripeIdentityWebhookSecretTest;

const stripePriceIdTest = 'price_1O9rYQFPKktQy8tpBuZCaJAw';
const stripePriceIdLive = 'price_1NlkQrFPKktQy8tpqjntJXwq';
export const STRIPE_PRICE_ID = isLive ? stripePriceIdLive : stripePriceIdTest;

/* Other constants. */
export const ONE_MONTH = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds
