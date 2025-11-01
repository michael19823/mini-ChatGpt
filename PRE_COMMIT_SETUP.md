# Pre-Commit Hooks Setup

Pre-commit hooks have been configured for this project using **Husky** and **lint-staged**.

## What's Configured

### Pre-commit Hook
Runs automatically before each commit to:
- **Type-check backend TypeScript files** (`backend/src/**/*.ts`)
- **Type-check frontend TypeScript files** (`front/src/**/*.{ts,tsx}`)

If type errors are found, the commit will be blocked.

## Files Added/Modified

1. **Root `package.json`** - Added husky and lint-staged dependencies
2. **`.husky/pre-commit`** - Pre-commit hook script
3. **`.husky/_/husky.sh`** - Husky helper script

## Setup Instructions

After cloning or when setting up on a new machine:

1. Install dependencies:
   ```bash
   npm install
   ```

2. If Git hooks aren't working, manually configure:
   ```bash
   git config core.hooksPath .husky
   ```

## How It Works

1. When you run `git commit`, Husky intercepts the commit
2. `lint-staged` identifies staged TypeScript files
3. TypeScript compiler (`tsc --noEmit`) checks for type errors
4. If errors found → commit is blocked
5. If no errors → commit proceeds

## Testing the Setup

To test if hooks are working:

1. Make a type error in a TypeScript file:
   ```typescript
   const x: string = 123; // Type error!
   ```

2. Stage and try to commit:
   ```bash
   git add backend/src/server.ts
   git commit -m "test"
   ```

3. You should see an error and the commit should be blocked.

## Bypassing Hooks (if needed)

To skip hooks for a specific commit:
```bash
git commit --no-verify -m "emergency fix"
```

**⚠️ Use sparingly!** The hooks are there to catch errors early.

## Configuration

The lint-staged configuration is in `package.json`:

```json
"lint-staged": {
  "backend/src/**/*.ts": [
    "cd backend && npx tsc --noEmit"
  ],
  "front/src/**/*.{ts,tsx}": [
    "cd front && npx tsc --noEmit"
  ]
}
```

You can modify this to add:
- ESLint checks
- Prettier formatting
- Unit tests
- Other validation steps

