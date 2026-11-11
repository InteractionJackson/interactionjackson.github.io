# Build Instructions

This portfolio site uses Tailwind CSS with a build process to generate the final CSS.

## Prerequisites

You need to have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

To check if you have Node.js installed, run:
```bash
node --version
npm --version
```

## Installation

1. Install the required dependencies:

```bash
npm install
```

This will install:
- Tailwind CSS
- PostCSS
- Autoprefixer

## Development

To build the CSS and watch for changes during development:

```bash
npm run dev
```

This command will:
- Generate the Tailwind CSS from `src/input.css` to `css/tailwind.css`
- Watch for any changes in your HTML files or CSS
- Automatically rebuild when changes are detected

Keep this running while you're working on the site.

## Production Build

When you're ready to deploy, create a production build:

```bash
npm run build
```

This command will:
- Generate the Tailwind CSS
- Minify the output for optimal performance
- Output to `css/tailwind.css`

## File Structure

```
.
├── src/
│   └── input.css              # Tailwind source CSS with custom styles
├── css/
│   └── tailwind.css           # Generated CSS (gitignored)
├── interactionjackson.css     # Custom effects and animations
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
├── package.json               # Node.js dependencies and scripts
├── index.html                 # Homepage
├── about.html                 # About page
├── labs.html                  # 1Password Labs case study
└── hailie.html                # Hailie case study
```

## Customization

### Colours

The palette is six semantic tokens. Values live as CSS variables in `src/input.css` (`:root`) and are exposed to Tailwind in `tailwind.config.js`:

| Token | Value | Tailwind | Usage |
|---|---|---|---|
| Primary text | #2B353E | `text-text-primary` | Headings, button labels, links, active nav |
| Secondary text | #525252 | `text-text-secondary` | Body copy, descriptions, metadata, secondary nav |
| Page background | #FBFCFE | `bg-canvas` | Main canvas |
| Subtle surface | #F0F4FA | `bg-surface` | Project image containers, secondary buttons |
| Border | #E4EBF6 | `border-line` | Surface and button outlines |
| Accent | #D2FF00 | `bg-accent` | Primary button backgrounds |

`mint`, `teal` and `orange` remain only for the About page principle cards.

### Layout

Page content sits in a centred 880px column (`max-w-content`) with 24px outer gutters (`px-3`):

```html
<div class="px-3">
  <div class="mx-auto w-full max-w-content">…</div>
</div>
```

Note the spacing scale is 8px-based (`px-3` = 24px, `mb-12` = 96px).

### Fonts

- TT Commons (self-hosted in `webFonts/`): headings, navigation and buttons (`font-bold`)
- Inter (Google Fonts): body copy (default `font-sans`)

Type roles are component classes in `src/input.css`: `.type-hero`, `.type-statement`, `.type-project`, `.type-company`, `.type-eyebrow`, `.type-role`, `.type-small`.

### Buttons

`.btn` plus `.btn-primary` (accent) or `.btn-light` (surface with border). Wrap adjacent buttons in `.btn-group` for a 16px gap.

### Custom Effects

Special sketch effects and animations are in `interactionjackson.css`:
- `.underline-sketch1`, `.underline-sketch2`, `.underline-sketch3`
- `.circle-sketch`
- `.highlight-sketch`
- Fade-in animations
- Card carousel styles

## Deployment

After running `npm run build`, the site is ready to deploy. Make sure to:

1. Commit the generated `css/tailwind.css` file
2. Upload all files to your hosting service (GitHub Pages, Netlify, etc.)

The site is fully static and requires no server-side processing.

## Troubleshooting

### CSS not updating

If your CSS changes aren't showing:
1. Make sure `npm run dev` is running
2. Hard refresh your browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
3. Check the browser console for errors

### Build failing

If `npm run build` fails:
1. Delete `node_modules` and run `npm install` again
2. Check that all HTML files are saved
3. Verify `tailwind.config.js` has no syntax errors

### Fonts not loading

If custom fonts aren't showing:
1. Check that the `webFonts/` directory is intact
2. Verify font paths in `src/input.css` are correct
3. Clear your browser cache

## Migration Notes

This site was migrated from Bootstrap to Tailwind CSS. Key changes:
- Bootstrap classes replaced with Tailwind utilities
- Bootstrap Icons replaced with Heroicons (solid style)
- Custom design tokens integrated into Tailwind config
- Responsive breakpoints updated to Tailwind's defaults

