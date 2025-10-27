# Quick Start Guide

Get up and running with @teleobra24h/ui in 5 minutes.

## Installation

```bash
# From your app directory (apps/v1, apps/v2, or apps/v3)
pnpm add @teleobra24h/ui
```

Or add to your `package.json`:

```json
{
  "dependencies": {
    "@teleobra24h/ui": "workspace:*"
  }
}
```

## Setup (3 Steps)

### 1. Configure Tailwind

**tailwind.config.js**
```js
module.exports = {
  presets: [require('@teleobra24h/ui/tailwind.preset')],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
};
```

### 2. Add CSS Variables

**styles/globals.css**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --radius: 0.5rem;
    /* See README.md for complete variable list */
  }
}
```

### 3. Import Components

**pages/index.tsx** or **app/page.tsx**
```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from '@teleobra24h/ui';

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <Card>
        <CardHeader>
          <CardTitle>Hello TeleObra24h!</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Your UI components are working!</p>
          <Button className="mt-4">Get Started</Button>
        </CardContent>
      </Card>
    </div>
  );
}
```

## Common Patterns

### Professional Card

```tsx
import { Card, CardHeader, CardTitle, CardContent, Avatar, AvatarImage, Badge, Button } from '@teleobra24h/ui';

<Card>
  <CardHeader className="flex flex-row items-center gap-4">
    <Avatar>
      <AvatarImage src="/profile.jpg" />
    </Avatar>
    <div>
      <CardTitle>João Silva</CardTitle>
      <Badge variant="outline">CREA 12345</Badge>
    </div>
  </CardHeader>
  <CardContent>
    <p>Electrical Engineer with 10+ years experience</p>
    <Button className="mt-4">Contact</Button>
  </CardContent>
</Card>
```

### FAQ Section

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@teleobra24h/ui';

<Accordion type="single" collapsible>
  <AccordionItem value="q1">
    <AccordionTrigger>How does it work?</AccordionTrigger>
    <AccordionContent>
      Post your project and receive proposals from professionals.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Mobile Menu

```tsx
import { Sheet, SheetTrigger, SheetContent, Button } from '@teleobra24h/ui';
import { Menu } from 'lucide-react';

<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline" size="icon">
      <Menu />
    </Button>
  </SheetTrigger>
  <SheetContent side="left">
    <nav className="flex flex-col gap-4">
      <a href="/">Home</a>
      <a href="/search">Search</a>
      <a href="/about">About</a>
    </nav>
  </SheetContent>
</Sheet>
```

### Testimonials Carousel

```tsx
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, Card } from '@teleobra24h/ui';

<Carousel>
  <CarouselContent>
    {testimonials.map((t) => (
      <CarouselItem key={t.id}>
        <Card className="p-6">
          <p>"{t.text}"</p>
          <p className="mt-2 text-sm text-muted-foreground">- {t.author}</p>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

## Version-Specific Tips

### V1 (Landing Page)
Focus on: Button, Card, Badge, Accordion, Carousel
```tsx
// Hero CTA
<Button size="lg">Find Professionals</Button>

// FAQ
<Accordion type="single" collapsible>...</Accordion>

// Testimonials
<Carousel>...</Carousel>
```

### V2 (Dashboard)
Focus on: Card, Avatar, Badge, Dialog, Tabs, Select
```tsx
// Professional profile
<Card>
  <Avatar>...</Avatar>
  <Badge variant="success">Verified</Badge>
</Card>

// Tabbed interface
<Tabs defaultValue="projects">...</Tabs>

// Modals
<Dialog>...</Dialog>
```

### V3 (Modern)
Focus on: Command, Sheet, ScrollArea, Separator
```tsx
// Command palette
<CommandDialog>...</CommandDialog>

// Mobile menu
<Sheet>...</Sheet>

// Scrollable areas
<ScrollArea>...</ScrollArea>
```

## Troubleshooting

**Styles not working?**
- Check Tailwind content includes UI package
- Verify CSS variables are defined
- Restart dev server

**TypeScript errors?**
- Run `pnpm install`
- Restart TypeScript server

**Component not found?**
- Check import: `@teleobra24h/ui`
- See COMPONENTS.md for full list

## Next Steps

1. ✅ Basic setup complete
2. 📖 Read [README.md](./README.md) for detailed docs
3. 🔍 Browse [COMPONENTS.md](./COMPONENTS.md) for full reference
4. 📚 Check [USAGE.md](./USAGE.md) for advanced patterns
5. 🎨 Customize theme colors in CSS variables

## Support

- Shadcn/ui docs: https://ui.shadcn.com
- Radix UI docs: https://www.radix-ui.com
- Tailwind CSS docs: https://tailwindcss.com

Happy building! 🚀
