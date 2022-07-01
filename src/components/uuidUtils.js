import { object, string } from "yup";
const schema = object().shape({
  uuid: string().required().uuid(),
});

const isValidUUID = (str, log = true) => {
  const test = { uuid: str };
  log && console.log("Test obj", test);
  const result = schema.isValidSync(test);
  log && console.log(test, result);
  return result;
};

export default isValidUUID;
