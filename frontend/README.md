# Product Design System

Build every page as a polished, premium product experience—not as a generic template or collection of UI components.

The interface should feel intentional, trustworthy, fast, and production-ready across all screen sizes.

## Design direction

Use a refined SaaS/product design language with:

- Strong visual hierarchy
- Clean, confident typography
- Generous but purposeful spacing
- Consistent layout rhythm
- High-quality responsive composition
- Restrained use of color
- Subtle depth and elevation
- Clear interaction states
- Elegant, functional components
- Carefully designed empty, loading, and error states

The design should communicate quality through alignment, spacing, typography, and details—not through excessive decoration.

## Avoid

Do not use:

- Generic AI dashboards
- Template-like hero sections
- Excessive gradients
- Random accent colors
- Oversized text with little substance
- Excessive rounded cards
- Repeated card grids without a clear purpose
- Heavy glassmorphism
- Unnecessary borders and shadows
- Crowded layouts
- Weak contrast
- Placeholder content in the final experience
- Decorative animation that does not improve usability
- Desktop layouts that are merely compressed on mobile

## Brand and visual language

Use a restrained visual system:

- One primary brand color
- One or two supporting accent colors
- Neutral backgrounds and surfaces
- Consistent semantic colors for success, warning, error, and information
- A clear distinction between primary, secondary, and tertiary actions

Color should guide attention and communicate meaning. It should not be used randomly.

Define design tokens for:

- Backgrounds
- Text colors
- Borders
- Brand colors
- Accent colors
- Status colors
- Shadows
- Radii
- Spacing
- Typography
- Motion

Avoid hardcoding repeated visual values throughout components.

## Typography

Use a modern, highly readable sans-serif typeface.

Establish a clear hierarchy for:

- Display headings
- Page headings
- Section headings
- Subheadings
- Body text
- Supporting text
- Labels
- Navigation
- Buttons
- Metadata

Typography must remain readable at every breakpoint.

Use:

- Appropriate line length
- Comfortable line height
- Clear contrast between heading and body text
- Consistent font weights
- Responsive type scaling
- Text wrapping that feels intentional

Do not use large headings simply to fill space. Every heading should communicate a clear idea.

## Layout system

Use a consistent layout system throughout the application.

Requirements:

- Centered max-width containers
- Consistent horizontal page padding
- Predictable vertical spacing
- Clear section separation
- Responsive grid and flex layouts
- Alignment based on a shared spacing scale
- Content widths appropriate to the reading experience
- Proper handling of long text and dynamic content

Prioritize visual rhythm. Sections should feel related without becoming cramped or repetitive.

## Components

Components should be:

- Reusable
- Composable
- Consistent
- Accessible
- Easy to maintain
- Designed around real product needs

Common components should share consistent behavior and visual language, including:

- Buttons
- Links
- Inputs
- Selects
- Dialogs
- Dropdowns
- Navigation
- Cards
- Tabs
- Badges
- Tooltips
- Tables
- Alerts
- Loading states
- Empty states
- Error states

Do not create multiple slightly different versions of the same component without a clear reason.

## Buttons and interactions

Every interactive element must communicate its state clearly.

Support:

- Default state
- Hover state
- Focus-visible state
- Active state
- Disabled state
- Loading state
- Error state where relevant

Primary actions should be visually prominent. Secondary actions should remain clear without competing with the primary action.

Do not use buttons for navigation when a link is more appropriate.

## Responsive behavior

Design intentionally for:

- Small mobile devices
- Large mobile devices
- Tablets
- Laptops
- Desktop monitors
- Large displays

Responsive behavior should account for:

- Navigation changes
- Stacking and reordering content
- Grid column changes
- Text wrapping
- Touch target sizes
- Modal and drawer behavior
- Table overflow
- Form layout
- Image and media scaling
- Safe spacing around screen edges

Do not simply reduce font sizes and stack everything vertically. Preserve hierarchy and usability at every breakpoint.

## Animation and motion

Use motion to improve clarity and perceived quality.

Animations should be:

- Subtle
- Fast
- Smooth
- Purposeful
- Consistent

Good uses include:

- Page transitions
- Menu and dialog entry
- Hover feedback
- Expanding content
- Loading indicators
- Status changes
- Scroll-based reveal where appropriate

Avoid:

- Constant movement
- Excessive parallax
- Slow transitions
- Distracting looping animations
- Animation that delays access to content

Respect `prefers-reduced-motion`.

## Accessibility

Accessibility is part of the design, not a final checklist.

Ensure:

- Semantic HTML
- Keyboard navigation
- Visible focus indicators
- Sufficient color contrast
- Correct heading hierarchy
- Accessible form labels
- Descriptive link text
- Appropriate button labels
- Screen-reader-friendly status messages
- Touch targets large enough for mobile use
- Meaningful alternative text for images
- No information conveyed by color alone

Interactive elements must be usable without a mouse.

## Content and states

Design for real product conditions, including:

- Loading
- Empty results
- Errors
- Long names
- Long descriptions
- Missing images
- Slow network conditions
- Offline or failed requests
- Disabled actions
- First-time users
- Returning users

Do not leave unfinished placeholder states in the final product.

Error messages should explain:

1. What happened
2. Why it may have happened
3. What the user can do next

## Performance

The interface should feel fast and responsive.

Prioritize:

- Fast initial rendering
- Optimized images
- Lazy loading where appropriate
- Minimal layout shift
- Efficient component rendering
- Reduced unnecessary JavaScript
- Smooth interaction on mobile devices

Do not sacrifice usability or accessibility for visual effects.

## Quality standard

The final result should feel like it was designed and built by a high-quality product team.

Before completing a feature:

1. Inspect every affected page and component.
2. Test desktop layouts.
3. Test mobile layouts.
4. Check responsive breakpoints.
5. Check spacing and alignment.
6. Check typography and text wrapping.
7. Check every interactive state.
8. Check keyboard navigation.
9. Check color contrast.
10. Check loading, empty, and error states.
11. Check for console and build errors.
12. Check for broken links and missing assets.
13. Remove visual inconsistencies.
14. Fix anything that looks unfinished.
# YANKABA-new-site
