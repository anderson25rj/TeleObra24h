# Component Library Reference

Complete reference of all components in @teleobra24h/ui package.

## Table of Contents

1. [Buttons & Actions](#buttons--actions)
2. [Forms & Inputs](#forms--inputs)
3. [Layout & Structure](#layout--structure)
4. [Navigation](#navigation)
5. [Feedback & Display](#feedback--display)
6. [Overlays](#overlays)
7. [Data Display](#data-display)

---

## Buttons & Actions

### Button

**File:** `/components/button.tsx`

A versatile button component with multiple variants and sizes.

**Variants:**
- `default` - Primary action button
- `destructive` - Dangerous actions (delete, remove)
- `outline` - Secondary actions with border
- `secondary` - Alternative secondary style
- `ghost` - Minimal style, no background
- `link` - Text link appearance

**Sizes:**
- `default` - Standard size (h-9)
- `sm` - Small (h-8)
- `lg` - Large (h-10)
- `icon` - Square icon button (h-9 w-9)

**Props:**
- `variant` - Visual style
- `size` - Button size
- `asChild` - Render as child element
- Standard button HTML attributes

**Example:**
```tsx
<Button variant="default" size="lg">Get Started</Button>
<Button variant="outline" size="sm">Cancel</Button>
<Button variant="ghost" asChild>
  <Link href="/login">Sign In</Link>
</Button>
```

---

## Forms & Inputs

### Input

**File:** `/components/input.tsx`

Standard text input field with consistent styling.

**Props:**
- `type` - Input type (text, email, password, etc.)
- Standard input HTML attributes

**Example:**
```tsx
<Input type="email" placeholder="seu@email.com" />
<Input type="password" placeholder="Senha" />
```

### Select

**File:** `/components/select.tsx`

Accessible dropdown select menu built on Radix UI.

**Sub-components:**
- `Select` - Root component
- `SelectTrigger` - Button that opens dropdown
- `SelectValue` - Displays selected value
- `SelectContent` - Dropdown panel
- `SelectGroup` - Groups related items
- `SelectLabel` - Group label
- `SelectItem` - Individual option
- `SelectSeparator` - Visual divider

**Example:**
```tsx
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Selecione um estado" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Sul</SelectLabel>
      <SelectItem value="rs">Rio Grande do Sul</SelectItem>
      <SelectItem value="sc">Santa Catarina</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Sudeste</SelectLabel>
      <SelectItem value="sp">São Paulo</SelectItem>
      <SelectItem value="rj">Rio de Janeiro</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

---

## Layout & Structure

### Card

**File:** `/components/card.tsx`

Flexible container for grouping related content.

**Sub-components:**
- `Card` - Main container
- `CardHeader` - Top section
- `CardTitle` - Title text
- `CardDescription` - Subtitle/description
- `CardContent` - Main content area
- `CardFooter` - Bottom section (typically actions)

**Example:**
```tsx
<Card>
  <CardHeader>
    <CardTitle>Professional Profile</CardTitle>
    <CardDescription>Licensed Engineer</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Specialized in electrical installations...</p>
  </CardContent>
  <CardFooter>
    <Button>Contact</Button>
  </CardFooter>
</Card>
```

### Separator

**File:** `/components/separator.tsx`

Visual divider between content sections.

**Props:**
- `orientation` - "horizontal" or "vertical"
- `decorative` - Whether purely decorative (default: true)

**Example:**
```tsx
<div>Content Above</div>
<Separator className="my-4" />
<div>Content Below</div>

<div className="flex gap-4">
  <div>Left</div>
  <Separator orientation="vertical" className="h-20" />
  <div>Right</div>
</div>
```

### ScrollArea

**File:** `/components/scroll-area.tsx`

Custom styled scrollable container.

**Sub-components:**
- `ScrollArea` - Container with custom scrollbar
- `ScrollBar` - Custom scrollbar styling

**Example:**
```tsx
<ScrollArea className="h-72 w-full rounded-md border">
  <div className="p-4">
    {/* Long content that scrolls */}
  </div>
</ScrollArea>
```

---

## Navigation

### Tabs

**File:** `/components/tabs.tsx`

Tabbed interface for organizing content.

**Sub-components:**
- `Tabs` - Root component
- `TabsList` - Container for tab buttons
- `TabsTrigger` - Individual tab button
- `TabsContent` - Content for each tab

**Example:**
```tsx
<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="projects">Projects</TabsTrigger>
    <TabsTrigger value="reviews">Reviews</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    Overview content...
  </TabsContent>
  <TabsContent value="projects">
    Projects content...
  </TabsContent>
</Tabs>
```

### Sheet

**File:** `/components/sheet.tsx`

Slide-out panel from edge of screen (perfect for mobile menus).

**Sub-components:**
- `Sheet` - Root component
- `SheetTrigger` - Button to open
- `SheetContent` - Sliding panel
- `SheetHeader` - Header section
- `SheetTitle` - Title text
- `SheetDescription` - Description text
- `SheetFooter` - Footer section

**Props:**
- `side` - "left", "right", "top", or "bottom"

**Example:**
```tsx
<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Menu</Button>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Navigation</SheetTitle>
    </SheetHeader>
    <nav>
      {/* Menu items */}
    </nav>
  </SheetContent>
</Sheet>
```

### Command

**File:** `/components/command.tsx`

Command palette with search (Cmd+K style interface).

**Sub-components:**
- `Command` - Root command container
- `CommandDialog` - Modal version
- `CommandInput` - Search input
- `CommandList` - Results list
- `CommandEmpty` - Empty state
- `CommandGroup` - Grouped results
- `CommandItem` - Individual result
- `CommandSeparator` - Visual divider
- `CommandShortcut` - Keyboard shortcut display

**Example:**
```tsx
const [open, setOpen] = useState(false);

<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Professionals">
      <CommandItem>João Silva</CommandItem>
      <CommandItem>Maria Santos</CommandItem>
    </CommandGroup>
    <CommandGroup heading="Services">
      <CommandItem>Electrical <CommandShortcut>⌘E</CommandShortcut></CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>
```

---

## Feedback & Display

### Badge

**File:** `/components/badge.tsx`

Small status indicator or label.

**Variants:**
- `default` - Primary badge
- `secondary` - Alternative style
- `destructive` - Error/warning
- `outline` - Bordered style
- `success` - Success/verified state (green)
- `warning` - Warning state (yellow)
- `info` - Informational (blue)

**Example:**
```tsx
<Badge variant="success">Verified</Badge>
<Badge variant="outline">CREA 12345</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="info">24h Available</Badge>
```

### Avatar

**File:** `/components/avatar.tsx`

User profile image with fallback.

**Sub-components:**
- `Avatar` - Container
- `AvatarImage` - Actual image
- `AvatarFallback` - Shown if image fails

**Example:**
```tsx
<Avatar>
  <AvatarImage src="/profile.jpg" alt="João Silva" />
  <AvatarFallback>JS</AvatarFallback>
</Avatar>
```

### Accordion

**File:** `/components/accordion.tsx`

Expandable content sections (perfect for FAQ).

**Sub-components:**
- `Accordion` - Root container
- `AccordionItem` - Individual section
- `AccordionTrigger` - Clickable header
- `AccordionContent` - Expandable content

**Props (Accordion):**
- `type` - "single" (one open) or "multiple" (many open)
- `collapsible` - Allow closing all items

**Example:**
```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="faq-1">
    <AccordionTrigger>How does it work?</AccordionTrigger>
    <AccordionContent>
      You post your project and qualified professionals send proposals.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="faq-2">
    <AccordionTrigger>What are the fees?</AccordionTrigger>
    <AccordionContent>
      We charge a small commission on completed projects.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Carousel

**File:** `/components/carousel.tsx`

Image/content carousel for testimonials and galleries.

**Sub-components:**
- `Carousel` - Root container
- `CarouselContent` - Scrollable content wrapper
- `CarouselItem` - Individual slide
- `CarouselPrevious` - Previous button
- `CarouselNext` - Next button

**Props (Carousel):**
- `orientation` - "horizontal" or "vertical"
- `opts` - Embla carousel options

**Example:**
```tsx
<Carousel className="w-full max-w-xs">
  <CarouselContent>
    <CarouselItem>
      <Card>
        <CardContent className="p-6">
          <p>"Great service!" - Client 1</p>
        </CardContent>
      </Card>
    </CarouselItem>
    <CarouselItem>
      <Card>
        <CardContent className="p-6">
          <p>"Highly recommended!" - Client 2</p>
        </CardContent>
      </Card>
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

---

## Overlays

### Dialog

**File:** `/components/dialog.tsx`

Modal overlay for focused content.

**Sub-components:**
- `Dialog` - Root component
- `DialogTrigger` - Button to open
- `DialogContent` - Modal content
- `DialogHeader` - Header section
- `DialogTitle` - Title text
- `DialogDescription` - Description text
- `DialogFooter` - Footer section

**Example:**
```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>View Details</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Project Details</DialogTitle>
      <DialogDescription>
        View all information about this project.
      </DialogDescription>
    </DialogHeader>
    <div>
      {/* Content */}
    </div>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

---

## Component Count

**Total Components:** 14

1. ✅ Button (with variants)
2. ✅ Card (6 sub-components)
3. ✅ Badge (with variants)
4. ✅ Avatar (3 sub-components)
5. ✅ Input
6. ✅ Select (10 sub-components)
7. ✅ Separator
8. ✅ Sheet (8 sub-components)
9. ✅ Dialog (8 sub-components)
10. ✅ Tabs (4 sub-components)
11. ✅ Accordion (4 sub-components)
12. ✅ Carousel (5 sub-components)
13. ✅ Command (9 sub-components)
14. ✅ ScrollArea (2 sub-components)

## Accessibility Features

All components include:

- ✅ Proper ARIA attributes
- ✅ Keyboard navigation support
- ✅ Focus management
- ✅ Screen reader announcements
- ✅ Semantic HTML
- ✅ High contrast support
- ✅ Reduced motion support

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Tree-shakeable exports
- No runtime CSS-in-JS
- Optimized bundle size
- Lazy-loadable components
- SSR compatible

## Dependencies

All components use:
- React 18.3+
- Radix UI primitives
- Tailwind CSS
- TypeScript

Icons from:
- lucide-react

Animation from:
- tailwindcss-animate
