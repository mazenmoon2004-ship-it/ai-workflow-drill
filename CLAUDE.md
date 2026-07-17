# Claude Project Notes

This repository is a Next.js App Router exercise focused on building a structured settings form.

## Lessons learned

1. Use a centralized validation schema with `zod`.
   - Keep validation rules declarative and easy to review.
   - Prefer schema-driven validation over scattered ad hoc checks.

2. Use `react-hook-form` for clean, predictable form state handling.
   - Keep form wiring simple and focused.
   - Use `@hookform/resolvers` to connect `zod` to the form.

3. Ensure accessibility and verification are part of the implementation.
   - Add proper labels for every input.
   - Show inline validation errors and connect them with `aria-describedby`.
   - Use `aria-invalid` for invalid fields.
   - Verify the result with the relevant build or test command before claiming success.

## Current expectations

- Keep the settings form implementation in `app/page.tsx` unless there is a clear reason to split it.
- Prefer accessible, user-friendly validation messages.
- Prevent submission when the form is invalid.
- Review code for both correctness and test coverage expectations.

## Reference

@AGENTS.md
