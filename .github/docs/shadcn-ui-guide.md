---
description: "Use shadcn/ui components as needed for any UI code"
patterns: "*.tsx"
---

# Shadcn UI Components

This project uses @shadcn/ui for UI components. These are beautifully designed, accessible components that you can copy and paste into your apps.

## Finding and Using Components

Components are available in the `components/ui` directory, following the aliases configured in `components.json`

## Using Components

Import components from the ui directory using the configured aliases:

```tsx
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
```

Example usage:

```tsx
<Button variant="outline">Click me</Button>

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
```

## Installing Additional Components

Many more components are available but not currently installed. You can view the complete list at https://ui.shadcn.com/r or from [shadcn registry json](./shadcn-r.json)

To install additional components, use the Shadcn CLI:

```bash
npx shadcn@latest add [component-name]
```

For example, to add the Accordion component:

```bash
npx shadcn@latest add accordion
```

Note: `npx shadcn-ui@latest` is deprecated, use `npx shadcn@latest` instead

## Commonly Used Components

These are commonly used components you may want to install:

- Accordion
- Alert
- AlertDialog
- AspectRatio
- Avatar
- Calendar
- Checkbox
- Collapsible
- Command
- ContextMenu
- DataTable
- DatePicker
- Dropdown Menu
- Form
- Hover Card
- Menubar
- Navigation Menu
- Popover
- Progress
- Radio Group
- ScrollArea
- Select
- Separator
- Sheet
- Skeleton
- Slider
- Switch
- Table
- Textarea
- Toast
- Toggle
- Tooltip

## Component Styling

This project uses the "new-york" style variant with the "neutral" base color and CSS variables for theming, as configured in `components.json`.

## Component Variants

Many shadcn/ui components support variants that can be specified through props:

```tsx
// Button variants
<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Button sizes
<Button size="default">Default</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
```

## Form Components

When building forms, use the Form components together with react-hook-form:

```tsx
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
```

## Best Practices

1. **Accessibility**: All shadcn/ui components are built with accessibility in mind, but make sure to maintain proper ARIA attributes and keyboard navigation.

2. **Dark Mode**: Components automatically support dark mode through the CSS variables. Ensure proper contrast in both light and dark modes.

3. **Responsive Design**: Combine component variants with responsive utilities from Tailwind CSS for fully responsive designs.

4. **State Management**: For complex component state, consider extracting the logic into custom hooks.

5. **Performance**: Use React's memoization techniques when rendering many components in lists or when components have expensive rendering logic.
