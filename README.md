## Pre-Commit Hooks Setup

This project uses Husky to enforce code quality checks before each commit. The following checks are performed:

1. **Linting**: Ensures code adheres to ESLint rules.
2. **Formatting**: Checks code formatting using Prettier.
3. **Type Checking**: Validates TypeScript types.
4. **Unit Tests**: Runs the test suite to ensure code correctness.

### Installation

The pre-commit hooks are automatically set up when you install dependencies:

```bash
npm install
```

### Manual Checks

You can manually run all checks using the following command:

```bash
npm run check
```

### Notes

- If any check fails, the commit will be blocked until the issues are resolved.
- To fix formatting issues automatically, run:

```bash
npx prettier --write .
```
