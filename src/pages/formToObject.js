export default function formToObject(form) {
  const formData = new FormData(form);
  const obj = Object.fromEntries(
    Array.from(formData.keys()).map((key) => [
      key,
      formData.getAll(key).length > 1
        ? formData.getAll(key)
        : key.includes("Values") || key.includes("Categories")
        ? [formData.get(key)]
        : formData.get(key),
    ])
  );

  return obj;
}
