import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Landing from "../index";

afterEach(cleanup);

describe("Examine Landing Component", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Landing />);
    expect(asFragment()).toMatchSnapshot();
  });
});
