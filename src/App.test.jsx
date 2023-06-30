import { describe, expect, it } from "vitest";
import App from "./App";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("renders successfully", () => {
    render(<App />);
    const text = screen.getAllByText(/Vite/i);
    
  });
});
