# GitHub Copilot Custom Instructions for Next.js with Shadcn UI Project

## Project Structure
This is a Next.js 15 application with App Router architecture (React 19) that uses Tailwind CSS for styling and Shadcn UI components. Always use Next.js App Router conventions such as file-based routing with folders, layout.js, page.js, and loading.js files.

## Coding Standards and Preferences
- Use TypeScript for all new files and components
- Follow Next.js App Router conventions for routing and file organization
- Prioritize Server Components when working with React or Next.js
- Only mark components as client components with 'use client' directive when absolutely necessary (e.g., for useState, event handlers, useEffect)
- Use double quotes for JSX and TSX files
- Use 2-space indentation throughout the codebase

## UI and Styling Guidelines
- Use shadcn/ui library components by default unless specified otherwise
- Components are available in the `components/ui` directory following the aliases in `components.json`
- Import components using the configured aliases: `import { Button } from "@/components/ui/button"`
- Use Tailwind CSS variable-based colors like `bg-primary` or `text-primary-foreground`
- Avoid using indigo or blue colors unless specifically requested
- ALWAYS generate responsive designs that work across all viewport sizes
- Use a wrapper element with background color Tailwind class if a different background is needed (default is white)
- For dark mode, explicitly set the `dark` class on an element and include JavaScript to toggle the class if necessary
- Ensure text is legible in dark mode by using appropriate Tailwind CSS color classes
- Use the clsx/twMerge pattern for conditional class names
- Components use the "new-york" style variant with "neutral" base color as configured in `components.json`

For more detailed information on shadcn/ui components, refer to [.github/docs/shadcn-ui-guide.md](./docs/shadcn-ui-guide.md)

## State Management
- Organize Effects in custom Hooks for better code organization and reuse
- Minimize direct use of Effects and prefer higher-level abstractions
- Use React hooks for local state management
- Prioritize server components and server actions for data fetching
- When client-side state is needed, use React's built-in hooks strategically:
  - `useState` for simple state
  - `useReducer` for complex state logic
  - `useEffect` only when necessary to connect to external systems
  - `useMemo` to cache expensive calculations
  - `useCallback` to cache function definitions for optimized components
  - `useTransition` for non-blocking state updates
  - `useDeferredValue` for deferring updates to non-critical UI parts

## Performance Considerations
- Use Next.js Image component for all images with proper optimization attributes
- Implement proper loading states using suspense boundaries
- Create error boundaries for graceful error handling
- Optimize component re-renders using memoization (useMemo, useCallback)
- Separate blocking updates from non-blocking updates for better UX
- Use streaming and partial rendering where appropriate

## Accessibility
- Ensure all interactive elements have proper ARIA attributes
- Maintain proper heading hierarchy (h1, h2, etc.)
- Provide alt text for all images and meaningful labels for form elements
- Ensure color contrast meets WCAG standards
- Support keyboard navigation for all interactive elements
- Test with screen readers and assistive technologies

## Dependencies and Tools
- Leverage Next.js 15 features including the improved App Router
- Use Turbopack for local development (already configured in package.json)
- Utilize Lucide React for icons
- Leverage the class-variance-authority package for component variants
- Use React 19 features where appropriate

## Implementation Approach
- Build responsive designs that work across all device sizes
- Follow best practices for React Server Components
- Create custom hooks to encapsulate and reuse complex behaviors
- Use TypeScript's type system to ensure type safety and enhance developer experience

## UI Design Guidelines
- Create beautiful, visually appealing interfaces that leverage shadcn/ui's minimalist aesthetic
- Follow shadcn/ui's design principles of clean, functional interfaces with appropriate whitespace
- Use shadcn/ui's component variants (default, outline, ghost, etc.) consistently throughout the app
- Maintain visual hierarchy through shadcn/ui's typography scales and component sizing
- Leverage the built-in interactive states of shadcn/ui components (hover, focus, active)
- Implement subtle transitions using shadcn/ui's animation classes when appropriate
- Use the shadcn/ui color token system (primary, secondary, accent, etc.) consistently
- Create harmonious layouts with appropriate spacing using shadcn/ui's spacing philosophy
- Design for all viewport sizes using responsive variants in Tailwind CSS
- Create intentional empty states and loading states using shadcn/ui's Skeleton components
- Maintain consistent UI density following shadcn/ui's component spacing patterns
- When customizing shadcn/ui components, preserve their accessibility features
- Create component compositions that feel cohesive with the rest of the shadcn/ui library
