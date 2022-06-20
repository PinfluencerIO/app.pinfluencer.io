export default function formToObject(form, typeName) {
  const formData = new FormData(form);
  const result = {};

  // loop over entries in form
  for (const item of formData.entries()) {
    // get the data type from the item
    const elementType = document.getElementsByName(item[0])[0].dataset?.type;

    // if typeName is undefined it means the form doesn't care about type,
    // if there is an elementType [brand | influencer] and the check mark matches add to results, otherwise ignore
    if (
      typeName === undefined ||
      elementType === typeName ||
      elementType === "shared"
    ) {
      // make sure to only take values and not empty strings
      if (item[1] !== "") {
        // make sure that array type elements are added to an array, otherwise they overwrite each other
        if (item[0] === "values" || item[0] === "categories") {
          if (item[0] in result) {
            result[item[0]].push(item[1]);
          } else {
            result[item[0]] = [item[1]];
          }
        } else {
          result[item[0]] = item[1];
        }
      }
    }
  }

  return result;
}
