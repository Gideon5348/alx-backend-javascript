// Export a const instance of WeakMap named weakMap
export const weakMap = new WeakMap();

// Export a new function named queryAPI
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const currentCount = weakMap.get(endpoint);

  if (currentCount >= 4) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, currentCount + 1);
}
