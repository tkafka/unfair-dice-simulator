# Random Asset Names

The application uses random suffixes for asset filenames (JS and CSS files) during the build process. This feature helps with cache busting by ensuring that each deployment generates unique filenames.

## Implementation

- Asset filenames include a timestamp and a random string
- The suffix format is: `{timestamp}-{random}`
- Applied to both JavaScript chunks and other assets (CSS, images, etc.)
- Configured in `vite.config.ts` using Rollup output options

## Benefits

- Forces browsers to download new versions of assets after each deployment
- Prevents serving stale cached files
- Improves reliability of updates for end users

## Example Output

Assets will be named like:

```
assets/main-1684847529123-x7f3p2.js
assets/styles-1684847529123-x7f3p2.css
```

The suffix consists of:

- Unix timestamp (e.g., 1684847529123)
- Random 6-character string (e.g., x7f3p2)

This ensures unique filenames for each build while maintaining a consistent naming pattern.
