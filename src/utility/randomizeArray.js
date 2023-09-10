export default function randomizeArray(array) {
  if (!Array.isArray(array)) {
    throw new Error("Parameter must be an array");
  }

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}
