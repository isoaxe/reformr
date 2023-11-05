/* Stripe keys for the SquareSpace account. */
const isLive = false;

const STRIPE_PUBLIC_KEY_TEST =
  'pk_test_51MercyFPKktQy8tpfcK2JfsIQcXMMpvl04HKmGpsYXwEvSziRHaUvxPGKnBu7khVchuIBj2vzLHuaOj9I0xLxVJP00a1f3fm93';
const STRIPE_SECRET_KEY_TEST = process.env.STRIPE_SECRET_KEY_TEST;
const STRIPE_PUBLIC_KEY_LIVE =
  'pk_live_51MercyFPKktQy8tpvFWJwqLJByyrMptoggDwhmEt5yz5Q4omJ5RoZvPyWoukSMx9gSUIV0DwWFAyV2wHnMhKXOID00zz3NEMqc';
const STRIPE_SECRET_KEY_LIVE = process.env.STRIPE_SECRET_KEY_LIVE;

export const STRIPE_PUBLIC_KEY = isLive
  ? STRIPE_PUBLIC_KEY_LIVE
  : STRIPE_PUBLIC_KEY_TEST;
export const STRIPE_SECRET_KEY = isLive
  ? STRIPE_SECRET_KEY_LIVE
  : STRIPE_SECRET_KEY_TEST;
