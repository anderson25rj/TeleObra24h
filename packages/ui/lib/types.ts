/**
 * Common type definitions for UI components
 */

/**
 * Variant types for components with multiple visual styles
 */
export type Variant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

/**
 * Size types for components with multiple sizes
 */
export type Size = "default" | "sm" | "lg" | "icon";

/**
 * Badge variant types including status indicators
 */
export type BadgeVariant =
  | "default"
  | "secondary"
  | "destructive"
  | "outline"
  | "success"
  | "warning"
  | "info";

/**
 * Orientation types for components that can be horizontal or vertical
 */
export type Orientation = "horizontal" | "vertical";

/**
 * Sheet/Dialog side positions
 */
export type SheetSide = "top" | "right" | "bottom" | "left";

/**
 * Common props for components that support className override
 */
export interface WithClassName {
  className?: string;
}

/**
 * Common props for components that support asChild pattern
 */
export interface WithAsChild {
  asChild?: boolean;
}

/**
 * Props for components with loading states
 */
export interface WithLoading {
  isLoading?: boolean;
  loadingText?: string;
}

/**
 * Props for components with disabled state
 */
export interface WithDisabled {
  disabled?: boolean;
}

/**
 * Common accessibility props
 */
export interface A11yProps {
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  "aria-expanded"?: boolean;
  "aria-selected"?: boolean;
  "aria-pressed"?: boolean;
  role?: string;
}

/**
 * Professional certification types for TeleObra24h
 */
export interface ProfessionalCertification {
  type: "CREA" | "CAU" | "CONFEA" | "CUSTOM";
  number: string;
  state?: string;
  verified?: boolean;
}

/**
 * Professional badge props
 */
export interface ProfessionalBadgeProps extends WithClassName {
  certification: ProfessionalCertification;
  showVerified?: boolean;
  compact?: boolean;
}

/**
 * Status types for project/professional status indicators
 */
export type StatusType =
  | "active"
  | "inactive"
  | "pending"
  | "verified"
  | "unverified"
  | "completed"
  | "in-progress"
  | "cancelled";

/**
 * Color scheme types for theming
 */
export type ColorScheme = "light" | "dark" | "system";

/**
 * Responsive breakpoint types
 */
export type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";
