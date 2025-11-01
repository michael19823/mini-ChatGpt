# Husky Git Hooks

This directory contains Git hooks managed by Husky.

## Pre-commit Hook

The pre-commit hook runs `lint-staged` which performs:
- TypeScript type checking for `backend/src/**/*.ts` files
- TypeScript type checking for `front/src/**/*.{ts,tsx}` files

This ensures that no type errors are committed to the repository.

## Setup

After cloning the repository, run:
```bash
npm install
```

This will automatically set up Husky hooks via the `prepare` script.

## Manual Setup

If hooks aren't working, you can manually configure Git:
```bash
git config core.hooksPath .husky
```

