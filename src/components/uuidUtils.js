import { object, string } from "yup";
const schema = object().shape({
  uuid: string().required().uuid(),
});

const isValidUUID = (str) => {
  const test = { uuid: str };
  const result = schema.isValidSync(test);
  return result;
};

export default isValidUUID;
