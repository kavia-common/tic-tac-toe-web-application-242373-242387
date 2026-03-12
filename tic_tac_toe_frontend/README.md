# tic_tac_toe_frontend (React UI)

This container currently contains only an `.env` file and **does not yet include a React application codebase** (e.g., `package.json`, `src/`, `public/`).

## Static analysis status

Static analysis checks such as:

- ESLint (`npm run lint`)
- TypeScript typecheck (`npm run typecheck`)
- Build (`npm run build`)

cannot be executed until a React project is present.

## What’s needed to enable static analysis

Create a React 17.x application in this folder (or copy an existing one in), including at minimum:

- `package.json` (with scripts for `lint`, `build`, and optionally `typecheck`)
- `src/` and `public/`

Once those exist, static analysis can be run and issues can be reported.

## Environment variables

An `.env` file already exists with the following variables (as required by the project):

- `REACT_APP_API_BASE`
- `REACT_APP_BACKEND_URL`
- `REACT_APP_FRONTEND_URL`
- `REACT_APP_WS_URL`
- `REACT_APP_NODE_ENV`
- `REACT_APP_NEXT_TELEMETRY_DISABLED`
- `REACT_APP_ENABLE_SOURCE_MAPS`
- `REACT_APP_PORT`
- `REACT_APP_TRUST_PROXY`
- `REACT_APP_LOG_LEVEL`
- `REACT_APP_HEALTHCHECK_PATH`
- `REACT_APP_FEATURE_FLAGS`
- `REACT_APP_EXPERIMENTS_ENABLED`
