import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  it("should render the header", async () => {
    render(<App />);

    const logo = await screen.findByAltText("logo tienda");

    expect(logo).toBeInTheDocument();
  });
});
