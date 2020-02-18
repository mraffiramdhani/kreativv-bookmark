import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, cleanup, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Login from "../index";

afterEach(cleanup);

describe("Examine Login Component", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("render email input correctly", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    expect(getByTestId("email_input")).toBeTruthy();
  });

  it("render password input correctly", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    expect(getByTestId("password_input")).toBeTruthy();
  });
});
