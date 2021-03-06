import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ForgotPassword from "../index";

afterEach(cleanup);

describe("Examine ForgotPassword Component", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <ForgotPassword />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
