import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../index";

describe("Home", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/?title=Home&path=/"]}>
        <Home />
      </MemoryRouter>
    );
  });

  it("renders Home page title", () => {
    expect(screen.getByTestId("page")).toHaveTextContent("Home");
  });

  it("renders query path", () => {
    expect(screen.getByTestId("query-path")).toHaveTextContent("/");
  });

  it("renders query title", () => {
    expect(screen.getByTestId("query-title")).toHaveTextContent("Home");
  });
});
