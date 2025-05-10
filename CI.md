# Continuous Integration (CI) with GitHub Actions

This project uses a GitHub Actions workflow for continuous integration. The workflow runs on every push and pull request to the `main` and `develop` branches.

## Workflow Steps
- **Checkout repository**
- **Set up Node.js (20.x)**
- **Install dependencies** (`npm ci`)
- **Run lint** (`npm run lint`)
- **Run type-check** (`npm run type-check`)
- **Run tests with coverage** (`npm run test`)

The workflow will fail if any step fails. The CI status is visible in pull requests.

---

## CI Status

![CI](https://github.com/${{github.repository}}/actions/workflows/ci.yml/badge.svg)

---

For more details, see `.github/workflows/ci.yml`.
