# Workflow

## Purpose
This project is a Next.js App Router exercise focused on building a structured settings form with validation and accessibility.

## Current status
- A clean settings form has been implemented in `app/page.tsx`.
- Validation uses `zod` with `react-hook-form` and `@hookform/resolvers`.
- Inline errors and accessible labels are included.
- The page is verified to build successfully.

## Review Checklist

### Correctness
- [x] Part 1 had weak or inconsistent validation.
- [x] Part 2 centralized validation in a `zod` schema.
- [x] Name and email rules are enforced consistently.
- [x] Validation logic is easier to review and reason about.

### Accessibility
- [x] Part 1 lacked clear label and error-message relationships.
- [x] Part 2 uses proper labels for each field.
- [x] Error messages are connected using `aria-describedby`.
- [x] Invalid fields are marked with `aria-invalid`.

### Edge Cases
- [x] Part 1 allowed invalid or empty submissions more easily.
- [x] Part 2 prevents submission until the form is valid.
- [x] Empty fields and invalid email formats are handled through schema validation.

### Review Effort
- [x] Part 1 required more manual inspection and correction.
- [x] Part 2 reduced review effort because the structure and validation were clearer.
- [x] Although Part 2 took longer to generate, it reduced total development time.

### AI Mistake Found
- [x] Part 1 failed to enforce proper validation and accessibility.
- [x] Part 2 improved the implementation but still did not include tests automatically, so manual verification was still needed.

## Notes
- Keep the form logic centralized and declarative.
- Prefer schema-driven validation over ad hoc checks.
- Ensure labels, `aria-invalid`, and error message associations remain accessible.
- Review should include both implementation quality and test coverage expectations.
Although the prompt requested tests, the AI did not generate them. 
Verification was instead performed manually using `npm run build` and runtime testing, highlighting the importance of enforcing the verification loop.