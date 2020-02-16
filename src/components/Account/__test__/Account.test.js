import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Account from "../index";

afterEach(cleanup);

describe("Examine Account Component", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Account />);
    expect(asFragment()).toMatchSnapshot();
  });
});
