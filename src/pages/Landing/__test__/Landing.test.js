import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Landing from "../index";

afterEach(cleanup);

describe("Examine Landing Component", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Landing />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("render title correctly", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Landing />
      </MemoryRouter>
    );
    expect(getByTestId("title")).toHaveTextContent("Kreativv Bookmark");
  });

  it("render login button correctly", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Landing />
      </MemoryRouter>
    );
    expect(getByTestId("login_button")).toHaveTextContent("Login");
  });

  it("render register button correctly", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Landing />
      </MemoryRouter>
    );
    expect(getByTestId("register_button")).toHaveTextContent("Register");
  });

  it("render landing image correctly", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Landing />
      </MemoryRouter>
    );
    const image = getByTestId("landing_image");
    expect(image.contains(image)).toBe(true);
  });
});
