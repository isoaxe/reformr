/*
 * Helper functions available for use throughout the project.
 */

/* Creates a unique document ID for Firestore. */
export function createDocId(name) {
  const number = Math.floor(Math.random() * 1000000);
  return `${name}-${number}`;
}

/*
 * Helpers for the helper functions. Only used within helpers.js and not exported.
 */
