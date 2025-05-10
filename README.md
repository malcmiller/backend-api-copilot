# hve-demo

## Continuous Integration (CI)

This project uses GitHub Actions for continuous integration. All pushes and pull requests to the `main` and `develop` branches will trigger the CI workflow, which runs linting, type checking, and tests with coverage.

### CI Workflow Steps
- **Checkout repository**
- **Set up Node.js (20.x)**
- **Install dependencies** (`npm ci`)
- **Run lint** (`npm run lint`)
- **Run type-check** (`npm run type-check`)
- **Run tests with coverage** (`npm run test`)

The workflow will fail if any step fails. The CI status is visible in pull requests.

#### CI Status

![CI](https://github.com/${{github.repository}}/actions/workflows/ci.yml/badge.svg)

---

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
