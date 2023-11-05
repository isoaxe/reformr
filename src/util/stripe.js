/* Helper functions for the payments route to be used on the server only. */
import { STRIPE_PRICE_ID } from './constants';

/* Create a new customer in Stripe. Required for subscription payments. */
export async function createCustomer(stripe, email) {
  const customer = await stripe.customers.create({ email });
  const stripe_uid = customer.id;
  return stripe_uid;
}

/* Create a new subscription in Stripe. */
export async function createSubscription(stripe, customerId) {
  const subscription = await stripe.subscriptions.create({
    customer: customerId,
    items: [{ price: STRIPE_PRICE_ID }],
    payment_behavior: 'default_incomplete',
    payment_settings: { payment_method_types: 'card' },
    expand: ['latest_invoice.payment_intent'],
  });

  return {
    subscription_id: subscription.id,
    client_secret: subscription.latest_invoice.payment_intent.client_secret,
    payment_intent_id: subscription.latest_invoice.payment_intent.id,
  };
}
