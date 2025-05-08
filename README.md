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

## Continuous Integration (CI) Pipeline

This project uses GitHub Actions for continuous integration. The CI pipeline is triggered on:

- Pushes to the `main` and `develop` branches.
- Pull requests targeting the `main` or `develop` branches.

### CI Pipeline Steps

The pipeline performs the following steps:

1. **Checkout Repository**: Clones the repository.
2. **Set Up Node.js**: Configures the Node.js environment.
3. **Install Dependencies**: Installs project dependencies using `npm ci`.
4. **Linting**: Runs ESLint to ensure code quality.
5. **Type Checking**: Validates TypeScript types.
6. **Run Tests**: Executes the test suite with coverage.

### Status Badges

You can add a status badge to your README to display the CI status:

```markdown
![CI](https://github.com/<your-username>/<your-repo>/actions/workflows/ci.yml/badge.svg)
```

Replace `<your-username>` and `<your-repo>` with your GitHub username and repository name.
