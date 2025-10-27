# Usage Guide for @teleobra24h/ui

This guide explains how to integrate and use the shared UI components in your TeleObra24h applications.

## Setup in Consumer Apps

### 1. Install the Package

In your app's `package.json`, add the workspace dependency:

```json
{
  "dependencies": {
    "@teleobra24h/ui": "workspace:*"
  }
}
```

Then run:
```bash
pnpm install
```

### 2. Configure Tailwind CSS

In your app's `tailwind.config.js`, import the preset and include the UI package in content:

```js
module.exports = {
  presets: [require('@teleobra24h/ui/tailwind.preset')],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Include UI package components
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Your custom theme extensions
    },
  },
};
```

### 3. Add CSS Variables

Create or update your global CSS file (e.g., `styles/globals.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;

    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;

    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;

    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;

    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;

    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;

    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;

    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;

    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

## Component Usage Examples

### V1 (Landing Page) - Simple & Professional

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent, Badge, Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@teleobra24h/ui';

// Hero section
<div className="hero">
  <h1>Encontre Profissionais Qualificados</h1>
  <Button size="lg">Começar Agora</Button>
</div>

// Services section
<Card>
  <CardHeader>
    <CardTitle>Serviços Elétricos</CardTitle>
  </CardHeader>
  <CardContent>
    <Badge variant="success">24h Disponível</Badge>
  </CardContent>
</Card>

// FAQ section
<Accordion type="single" collapsible>
  <AccordionItem value="faq-1">
    <AccordionTrigger>Como funciona?</AccordionTrigger>
    <AccordionContent>
      Você publica seu projeto e profissionais qualificados enviam propostas.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### V2 (Professional Dashboard) - Feature Rich

```tsx
import {
  Button,
  Card,
  Badge,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@teleobra24h/ui';

// Professional card
<Card>
  <CardHeader className="flex flex-row items-center gap-4">
    <Avatar>
      <AvatarImage src="/profile.jpg" />
      <AvatarFallback>JS</AvatarFallback>
    </Avatar>
    <div>
      <CardTitle>João Silva</CardTitle>
      <div className="flex gap-2 mt-2">
        <Badge variant="outline">CREA 12345</Badge>
        <Badge variant="success">Verificado</Badge>
      </div>
    </div>
  </CardHeader>
</Card>

// Tabbed dashboard
<Tabs defaultValue="projects">
  <TabsList>
    <TabsTrigger value="projects">Projetos</TabsTrigger>
    <TabsTrigger value="proposals">Propostas</TabsTrigger>
    <TabsTrigger value="reviews">Avaliações</TabsTrigger>
  </TabsList>
  <TabsContent value="projects">
    {/* Projects content */}
  </TabsContent>
</Tabs>

// Modal for project details
<Dialog>
  <DialogTrigger asChild>
    <Button>Ver Detalhes</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Detalhes do Projeto</DialogTitle>
    </DialogHeader>
    {/* Project details */}
  </DialogContent>
</Dialog>
```

### V3 (Modern Search-First) - Advanced UI

```tsx
import {
  Button,
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  Sheet,
  SheetTrigger,
  SheetContent,
  ScrollArea,
} from '@teleobra24h/ui';

// Command palette (Cmd+K search)
const [open, setOpen] = useState(false);

useEffect(() => {
  const down = (e: KeyboardEvent) => {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      setOpen((open) => !open);
    }
  };
  document.addEventListener('keydown', down);
  return () => document.removeEventListener('keydown', down);
}, []);

<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Buscar profissionais, serviços..." />
  <CommandList>
    <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
    <CommandGroup heading="Profissionais">
      <CommandItem>João Silva - Eletricista</CommandItem>
      <CommandItem>Maria Santos - Encanadora</CommandItem>
    </CommandGroup>
    <CommandGroup heading="Serviços">
      <CommandItem>Instalação Elétrica</CommandItem>
      <CommandItem>Hidráulica Residencial</CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>

// Mobile menu
<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline" size="icon">
      <Menu className="h-6 w-6" />
    </Button>
  </SheetTrigger>
  <SheetContent side="left">
    <nav className="flex flex-col gap-4">
      <a href="/">Início</a>
      <a href="/search">Buscar</a>
      <a href="/about">Sobre</a>
    </nav>
  </SheetContent>
</Sheet>
```

## Best Practices

### 1. Type Safety

Always use TypeScript types provided by the components:

```tsx
import { Button, type ButtonProps } from '@teleobra24h/ui';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

### 2. Composition

Compose components for complex UIs:

```tsx
import { Card, CardHeader, CardTitle, CardContent, Badge, Avatar, AvatarImage, Button } from '@teleobra24h/ui';

const ProfessionalCard = ({ professional }) => (
  <Card>
    <CardHeader>
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={professional.avatar} />
        </Avatar>
        <div>
          <CardTitle>{professional.name}</CardTitle>
          <Badge variant="outline">{professional.certification}</Badge>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <p>{professional.bio}</p>
      <Button className="mt-4">Contratar</Button>
    </CardContent>
  </Card>
);
```

### 3. Theming

Use CSS variables to customize colors per version:

```css
/* V1 - Professional blue */
:root {
  --primary: 221 83% 53%;
}

/* V2 - Modern purple */
:root {
  --primary: 262 83% 58%;
}

/* V3 - Vibrant teal */
:root {
  --primary: 173 80% 40%;
}
```

### 4. Accessibility

Components are accessible by default, but always:

- Provide meaningful aria-labels
- Use semantic HTML
- Test keyboard navigation
- Support screen readers

```tsx
<Button aria-label="Close menu">
  <X className="h-4 w-4" />
</Button>
```

## Testing Components

Test components using React Testing Library:

```tsx
import { render, screen } from '@testing-library/react';
import { Button } from '@teleobra24h/ui';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByRole('button')).toHaveTextContent('Click me');
});
```

## Troubleshooting

### Styles not applying

1. Check Tailwind content paths include UI package
2. Verify CSS variables are defined
3. Ensure Tailwind preset is imported

### TypeScript errors

1. Run `pnpm install` to install type dependencies
2. Check tsconfig.json includes UI package paths
3. Restart TypeScript server in your IDE

### Component not found

1. Check export in `/packages/ui/index.ts`
2. Verify import path: `@teleobra24h/ui`
3. Clear node_modules and reinstall

## Support

For issues or questions:
1. Check the component documentation in README.md
2. Review examples in USAGE.md
3. Consult Shadcn/ui docs: https://ui.shadcn.com
4. Check Radix UI docs: https://www.radix-ui.com
