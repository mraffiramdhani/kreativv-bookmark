import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Register from "../index";

afterEach(cleanup);

describe("Examine Register Component", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
