import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home settings form", () => {
  it("shows inline errors for invalid inputs and disables submit until valid", async () => {
    const user = userEvent.setup();
    render(<Home />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole("button", { name: /save settings/i });

    expect(submitButton).toBeDisabled();

    await user.type(nameInput, "A");
    await user.type(emailInput, "invalid");

    expect(await screen.findByText(/name must be at least 2 characters long/i)).toBeInTheDocument();
    expect(await screen.findByText(/please enter a valid email address/i)).toBeInTheDocument();
    expect(submitButton).toBeDisabled();

    await user.clear(nameInput);
    await user.type(nameInput, "Alex");
    await user.clear(emailInput);
    await user.type(emailInput, "alex@example.com");

    expect(submitButton).toBeEnabled();
  });
});
