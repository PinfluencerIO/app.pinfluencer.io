import { render } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { DevComponent } from "./Dev";
import underTest from "./underTest";

test("should render listing row", () => {
  const output = render(
    underTest(
      user,
      <DevComponent
        id={1}
        listingTitle={"listingTitle"}
        productName={"productName"}
        month={"month"}
        year={"year"}
        appliedCount={1}
        approvedCount={2}
        rejectedCount={0}
      />
    ),
    {
      wrapper: HashRouter,
    }
  );
  // output.debug();
});

const user = {
  given_name: "given",
  family_name: "family",
  email: "email@domain.tld",
  "custom:usertype": "brand",
};
