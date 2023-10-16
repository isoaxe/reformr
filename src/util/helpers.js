/*
 * Helper functions available for use throughout the project.
 */

/* Creates a unique document ID for Firestore. Number always 6 digits long. */
export function createDocId(name) {
  const idNumber = Math.floor(Math.random() * 1000000);
  let idString = idNumber.toString(); // possibly < 6 digits
  const leadingZeros = 6 - idString.length;
  const leadingZerosAsString = '0'.repeat(leadingZeros);
  idString = leadingZerosAsString + idString; // always 6 digits
  return `${name}-${idString}`;
}

/*
 * Helpers for the helper functions. Only used within helpers.js and not exported.
 */
