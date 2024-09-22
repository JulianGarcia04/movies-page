export function validateSingleProperty<T extends object>(
  obj: T,
): { key: keyof T; value: T[keyof T] } | null {
  const keys = Object.keys(obj) as Array<keyof T>;

  if (keys.length !== 1) {
    return null;
  }

  const key = keys[0];
  return { key, value: obj[key] };
}
