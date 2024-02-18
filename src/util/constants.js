const isLive = false; // TODO: Toggle to true when ready to go live
export const isLocal = process.env.HOST === 'localhost';

/* Constants used in CLI testing. Update if emulated data gets reset. */
export const STRIPE_UID = 'cus_PZohtqPBQ4Bthz';
export const FIRESTORE_DOC_ID = 'Shelly-269531';
export const PAYMENT_METHOD_ID = 'pm_1Okf4oFPKktQy8tpwPwvsDBP';

// TODO: Add a redirect to patient dashboard after Calendly booking is complete.

/* Stripe standard keys. */
export const STRIPE_PUBLIC_KEY = isLive
  ? process.env.STRIPE_PUBLIC_KEY_LIVE
  : process.env.STRIPE_PUBLIC_KEY_TEST;

export const STRIPE_SECRET_KEY = isLive
  ? process.env.STRIPE_SECRET_KEY_LIVE
  : process.env.STRIPE_SECRET_KEY_TEST;

/* Stripe webhook secrets. */
export const STRIPE_INVOICE_WEBHOOK_SECRET = isLive
  ? process.env.STRIPE_INVOICE_WEBHOOK_SECRET_LIVE
  : isLocal
  ? process.env.STRIPE_INVOICE_WEBHOOK_SECRET_LOCAL
  : process.env.STRIPE_INVOICE_WEBHOOK_SECRET_TEST;

export const STRIPE_IDENTITY_WEBHOOK_SECRET = isLive
  ? process.env.STRIPE_IDENTITY_WEBHOOK_SECRET_LIVE
  : isLocal
  ? process.env.STRIPE_IDENTITY_WEBHOOK_SECRET_LOCAL
  : process.env.STRIPE_IDENTITY_WEBHOOK_SECRET_TEST;

/* Stripe price ID. */
const stripePriceIdTest = 'price_1OiYWEFPKktQy8tprxPEqPA0'; // NZ$599 per month
const stripePriceIdLive = 'price_1OiYOaFPKktQy8tp9RjCvbdt'; // NZ$599 per month
const stripePriceIdLiveNominal = 'price_1OgemuFPKktQy8tpsYpMm5GC'; // NZ$1 per month
export const STRIPE_PRICE_ID = isLive
  ? stripePriceIdLiveNominal // TODO: Change to stripePriceIdLive
  : stripePriceIdTest;
