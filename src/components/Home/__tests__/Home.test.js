import { render, screen } from "@testing-library/react";
import Home from "../index";

jest.mock("react-router", () => ({
  __esModule: true,
  useLocation: jest.fn().mockReturnValue({
    pathname: "/testroute",
    search: "?title=Home&path=/",
    hash: "",
    state: null,
  }),
}));

describe("Home", () => {
  beforeEach(() => {
    render(<Home />);
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
