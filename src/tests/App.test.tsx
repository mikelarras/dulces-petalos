import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("the App component", () => {
  it("passes simple tests", () => {
    expect(1 + 1).toBe(2);
  });
  it("renders the App component", () => {
    render(<App />);

    screen.debug();
  });
});
