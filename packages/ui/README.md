# @teleobra24h/ui

Shared UI component library for TeleObra24h applications, built with Shadcn/ui and Radix UI primitives.

## Features

- **Fully typed** with TypeScript
- **Accessible** following WAI-ARIA design patterns
- **Themeable** using Tailwind CSS and CSS variables
- **Composable** components built on Radix UI primitives
- **Keyboard navigation** support
- **Server-side ready** (works with SSR)

## Installation

This package is part of the TeleObra24h monorepo and should be imported using the workspace protocol:

```json
{
  "dependencies": {
    "@teleobra24h/ui": "workspace:*"
  }
}
```

## Usage

### Importing Components

```tsx
import { Button, Card, Badge } from "@teleobra24h/ui";

function MyComponent() {
  return (
    <Card>
      <Button>Click me</Button>
      <Badge>New</Badge>
    </Card>
  );
}
```

### Styling with Tailwind

Components are unstyled by default and rely on Tailwind CSS classes. Make sure your consuming app has:

1. Tailwind CSS configured
2. CSS variables defined for theming (primary, secondary, accent, etc.)

Example tailwind.config.js:

```js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}", // Include UI package
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // ... more color definitions
      },
    },
  },
};
```

## Available Components

### Layout & Structure

- **Card** - Container with header, content, and footer sections
- **Separator** - Visual divider between content
- **ScrollArea** - Custom scrollable container

### Navigation

- **Tabs** - Tabbed interface for organizing content
- **Sheet** - Slide-out panel (perfect for mobile menus)
- **Command** - Command palette with search (for V3)

### Forms & Input

- **Button** - Clickable button with multiple variants
- **Input** - Text input field
- **Select** - Dropdown select menu

### Feedback

- **Badge** - Small status indicators and labels
- **Avatar** - User profile images with fallback
- **Dialog** - Modal overlays
- **Accordion** - Expandable content sections (great for FAQs)

### Display

- **Carousel** - Image/content carousel (perfect for testimonials)

## Component Examples

### Button Variants

```tsx
<Button variant="default">Default</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
```

### Card Structure

```tsx
<Card>
  <CardHeader>
    <CardTitle>Professional Profile</CardTitle>
    <CardDescription>Engineer details</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Profile content here</p>
  </CardContent>
  <CardFooter>
    <Button>Contact</Button>
  </CardFooter>
</Card>
```

### Badge for Professional Certifications

```tsx
<Badge variant="success">Verified</Badge>
<Badge variant="outline">CREA 12345</Badge>
<Badge variant="info">Active</Badge>
```

### Sheet for Mobile Menu

```tsx
<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Menu</Button>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Navigation</SheetTitle>
    </SheetHeader>
    {/* Menu items */}
  </SheetContent>
</Sheet>
```

### Accordion for FAQ

```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>How does it work?</AccordionTrigger>
    <AccordionContent>
      It works by connecting professionals with clients.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>What are the fees?</AccordionTrigger>
    <AccordionContent>
      We charge a small commission on completed projects.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Carousel for Testimonials

```tsx
<Carousel>
  <CarouselContent>
    <CarouselItem>
      <Card>
        <CardContent className="p-6">
          <p>"Great platform!" - Client Name</p>
        </CardContent>
      </Card>
    </CarouselItem>
    <CarouselItem>
      <Card>
        <CardContent className="p-6">
          <p>"Found amazing professionals!" - Another Client</p>
        </CardContent>
      </Card>
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

### Command Palette (V3)

```tsx
<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Search professionals..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Recent">
      <CommandItem>João Silva - Electrician</CommandItem>
      <CommandItem>Maria Santos - Plumber</CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>
```

## Accessibility

All components follow WAI-ARIA design patterns and include:

- Proper ARIA attributes
- Keyboard navigation support
- Screen reader announcements
- Focus management

## Theming

Components use CSS variables for theming. Define these in your global CSS:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* ... more variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... dark mode variables */
}
```

## Contributing

When adding new components:

1. Follow Shadcn/ui patterns
2. Use Radix UI primitives when available
3. Add proper TypeScript types
4. Include JSDoc comments
5. Add accessibility features
6. Export from index.ts

## License

MIT
