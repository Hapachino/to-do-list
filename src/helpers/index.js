export function randomString(length = 8) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890';
  let randomString = '';

  for (let i = 0; i < length; i++) {
    randomString += characters[Math.random() * characters.length | 0];
  }

  return randomString;
}
