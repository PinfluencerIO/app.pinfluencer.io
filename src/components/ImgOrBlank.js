import React from "react";

export const ImgOrBlank = ({ imageSrc, altLabel, width, height }) => {
  if (
    imageSrc === undefined ||
    imageSrc.includes(
      "https://pinfluencer-product-images.s3.eu-west-2.amazonaws.com/default_product_image"
    )
  ) {
    return "";
  }
  return <img alt={altLabel} src={imageSrc} width={width} height={height} />;
};
