/* Stripe keys for the SquareSpace account. */
const isLive = false;

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

const stripeWebhookSecretTest = process.env.STRIPE_WEBHOOK_SECRET_TEST;
const stripeWebhookSecretLive = process.env.STRIPE_WEBHOOK_SECRET_LIVE;
export const STRIPE_WEBHOOK_SECRET = isLive
  ? stripeWebhookSecretLive
  : stripeWebhookSecretTest;

const stripePriceIdTest = 'price_1O9rYQFPKktQy8tpBuZCaJAw';
const stripePriceIdLive = 'price_1NlkQrFPKktQy8tpqjntJXwq';
export const STRIPE_PRICE_ID = isLive ? stripePriceIdLive : stripePriceIdTest;
