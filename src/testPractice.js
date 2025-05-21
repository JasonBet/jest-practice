// greeting.js
export function sum(a, b) {
  return a + b;
}

export function capitalize(str) {
  if(!str) return null;
  return str.charAt(0).toUpperCase() + str.slice(1);
}