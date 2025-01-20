# GitHub Pages Deployment

The application is configured for deployment to GitHub Pages, making it accessible via a web browser at `https://[username].github.io/unfair-dice/`.

## Configuration

The following configurations have been set up to enable GitHub Pages deployment:

1. **Base URL Configuration**

   - The `vite.config.ts` has been configured with a base URL matching the repository name: `/unfair-dice-simulator/`
   - This ensures all assets are loaded correctly when deployed to GitHub Pages

2. **Deployment Dependencies**

   - Added `gh-pages` package as a development dependency
   - This package handles the deployment process to GitHub Pages

3. **NPM Scripts**
   - `pnpm run predeploy`: Automatically runs before deployment to build the project
   - `pnpm run deploy`: Deploys the built application to GitHub Pages

## Deployment Process

To deploy the application to GitHub Pages:

1. Ensure all changes are committed to the repository
2. Run the deployment command:
   ```bash
   pnpm run deploy
   ```
3. The command will:
   - Build the project
   - Push the built files to the `gh-pages` branch
   - Make the site available at `https://tkafka.github.io/unfair-dice-simulator/`

## First-time Setup

For the first deployment, ensure:

1. The repository settings on GitHub have GitHub Pages enabled
2. The GitHub Pages source is set to deploy from the `gh-pages` branch
3. You have the necessary repository permissions to deploy

## Notes

- The deployment process creates and updates a `gh-pages` branch in your repository
- The built files are served from this branch
- The main development continues on your primary branch
