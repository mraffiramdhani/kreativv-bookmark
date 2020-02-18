import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Register from "../index";

afterEach(cleanup);

describe("Examine Register Component", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Register />);
    expect(asFragment()).toMatchSnapshot();
  });
});
