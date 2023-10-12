/*
 * Helper functions available for use throughout the project.
 */

/* Creates a unique document ID for Firestore. */
export function createDocumentId(name) {
  const sanitisedName = sanitiseString(name);
  const number = Math.floor(Math.random() * 1000000);
  return `${sanitisedName}-${number}`;
}

/*
 * Helpers for the helper functions. Only used within helpers.js and not exported.
 */

/* Takes a string and removes any non-latin characters except hyphens. */
function sanitiseString(string) {
  const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const alphabet = uppercaseAlphabet + lowercaseAlphabet + '-';
  let sanitisedString = '';
  for (const char of string) {
    if (alphabet.includes(char)) sanitisedString += char;
  }
  return sanitisedString;
}
