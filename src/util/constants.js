const isLive = false; // TODO: Toggle to true when ready to go live
export const isLocal = process.env.HOST === 'localhost';

/* Constants used when testing via the CLI. Update if test data gets reset. */
export const STRIPE_UID = 'cus_PYOSXJXLrlQvYZ';
export const FIRESTORE_DOC_ID = 'User-955039';
export const PAYMENT_METHOD_ID = 'pm_1OjHgEFPKktQy8tpb37WDVPT';
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
  : isLocal
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
  : isLocal
  ? stripeIdentityWebhookSecretLocal
  : stripeIdentityWebhookSecretTest;

const stripePriceIdTest = 'price_1OiYWEFPKktQy8tprxPEqPA0'; // NZ$599 per month
const stripePriceIdLive = 'price_1OiYOaFPKktQy8tp9RjCvbdt'; // NZ$599 per month
const stripePriceIdLiveNominal = 'price_1OgemuFPKktQy8tpsYpMm5GC'; // NZ$1 per month
export const STRIPE_PRICE_ID = isLive
  ? stripePriceIdLiveNominal // TODO: Change to stripePriceIdLive
  : stripePriceIdTest;
