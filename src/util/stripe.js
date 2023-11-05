/* Helper functions for the payments route to be used on the server only. */

export async function createCustomer(stripe, email) {
  const customer = await stripe.customers.create({ email });
  const stripe_uid = customer.id;
  return stripe_uid;
}
