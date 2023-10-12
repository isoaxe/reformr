/* Takes a string and removes any non-latin characters except hyphens. */
export function sanitiseString(string) {
  const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const alphabet = uppercaseAlphabet + lowercaseAlphabet + '-';
  let sanitisedString = '';
  for (const char of string) {
    if (alphabet.includes(char)) sanitisedString += char;
  }
  return sanitisedString;
}
