import { Image } from "../presentation/image/Image";

export const Dev = () => {
  const data = {
    image: "data:image/jpeg;base64,",
  };
  const handleChange = (event) => {
    console.log("DEV: handle change", event);
  };
  return (
    <Image
      id="image"
      data={data}
      handleChange={handleChange}
      label="The Label"
      sizeLabel="The size label"
      width={200}
      height={75}
    />
  );
};
