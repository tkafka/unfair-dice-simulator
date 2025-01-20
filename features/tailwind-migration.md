# Tailwind Migration

The project has been migrated to use Tailwind CSS for styling. This provides:

- Utility-first CSS approach
- Responsive design utilities
- Easy theme customization
- Automatic purging of unused styles in production
- Consistent spacing and color scales
- Flexible component styling

## Layout

- Uses flexbox for main layout (`flex flex-col`)
- Responsive padding with `p-4 sm:p-6 lg:p-8`
- Grid system for content layout (`grid grid-cols-1 lg:grid-cols-[1fr,2fr]`)
- Shadow utilities for depth (`shadow-md`)
- Rounded corners for modern look (`rounded-2xl`)
- Natural width layout without forced scrollbars
- Footer at the bottom of content

## Colors

- Uses Tailwind's color palette
- Custom colors for dice indicators (`#8884d8`, `#82ca9d`)
- Text colors: `text-gray-600`, `text-gray-700`, `text-gray-800`
- Background colors: `bg-gray-100`, `bg-white`
- Interactive states with hover colors

## Responsive Design

- Mobile-first approach
- Breakpoint-specific styles using `sm:`, `md:`, `lg:` prefixes
- Responsive text sizes (`text-base lg:text-lg`)
- Flexible layouts that adapt to screen size
- Column layout changes at different breakpoints

## Components

- Cards with consistent padding and shadows
- Interactive buttons with hover states
- Form elements with proper styling
- Chart container with responsive width
- Footer with flexible layout
