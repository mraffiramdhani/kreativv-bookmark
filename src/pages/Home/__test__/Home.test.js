import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "../index";

afterEach(cleanup);

describe("Examine Home Component", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
