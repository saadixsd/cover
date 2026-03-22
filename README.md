# COVER

**COVER** is a Canadian nonprofit website offering confidential support and resources for students and individuals navigating unsafe situations. This repo is the source for the public-facing site (Vite + React + TypeScript).

## Repository

- **GitHub:** [https://github.com/saadixsd/cover](https://github.com/saadixsd/cover)

### Get the code

**Option A — Clone with Git (recommended for development)**

```sh
git clone https://github.com/saadixsd/cover.git
cd cover
```

**Option B — Download a ZIP**

1. Open [https://github.com/saadixsd/cover](https://github.com/saadixsd/cover).
2. Click the green **Code** button → **Download ZIP**.
3. Unzip the archive and open a terminal in the extracted `cover` folder.

## Run it locally

You need **Node.js 18+** (LTS is fine). If you use a version manager, [nvm](https://github.com/nvm-sh/nvm) works well.

```sh
# Install dependencies
npm install
```

```sh
# Start the dev server (hot reload)
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

No API keys or `.env` files are required for the standard static marketing site to run.

### Other commands

| Command        | Purpose                          |
|----------------|----------------------------------|
| `npm run build` | Production build → `dist/`       |
| `npm run preview` | Serve the production build locally |
| `npm run lint`  | Run ESLint                       |
| `npm test`      | Run tests (Vitest)               |

### Using Bun (optional)

This project includes a `bun.lock` file. If you use [Bun](https://bun.sh/), you can run `bun install` and `bun run dev` instead of npm.

## Tech stack

- [Vite](https://vitejs.dev/) — build tool and dev server  
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)  
- [React Router](https://reactrouter.com/)  
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)

## Contributing / pushing changes

1. Clone or pull the latest `main` branch.
2. Create a branch for your work, or commit on `main` if you have access.
3. After making changes:

   ```sh
   git add .
   git commit -m "Describe your change"
   git push origin main
   ```

If `git push` asks for credentials, use a [GitHub personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) or [SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).
