/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    maxWidth: {
      none: 'none',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      content: '55rem',  // 880px main column shared by header, intro and body
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
      prose: '65ch',
      screen: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    extend: {
      // Semantic palette: values live as CSS variables in src/input.css (:root)
      colors: {
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        canvas: 'var(--color-canvas)',
        surface: 'var(--color-surface)',
        line: 'var(--color-line)',
        accent: 'var(--color-accent)',
        // Legacy fills used only by the About page principle cards
        mint: '#09C49B',
        teal: '#89DBE6',
        orange: '#F1BC58',
      },
      fontFamily: {
        // TT Commons: headings, navigation and buttons. Inter: body copy.
        'bold': ['TTCommonsProBold', 'sans-serif'],
        'demibold': ['TTCommonsProDemiBold', 'sans-serif'],
        'regular': ['TTCommonsProRegular', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display': '4rem',
        'display-sm': '3rem',
      },
      borderRadius: {
        'btn': '12px',
        '4xl': '1.5rem',   // 24px: smaller project surfaces
        '5xl': '2rem',
        '6xl': '2.5rem',   // 40px: large project-image containers
      },
      backdropBlur: {
        xs: '8px',
      },
      spacing: {
        '0': '0px',
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '7': '56px',
        '8': '64px',
        '9': '72px',
        '10': '80px',
        '11': '88px',
        '12': '96px',
        '14': '112px',
        '16': '128px',
        '18': '144px',
        '20': '160px',
        '24': '192px',
        '28': '224px',
        '32': '256px',
        '36': '288px',
        '40': '320px',
        '44': '352px',
        '48': '384px',
        '52': '416px',
        '56': '448px',
        '60': '480px',
        '64': '512px',
        '72': '576px',
        '80': '640px',
        '96': '768px',
        'section': '120px',  // 120px - space between sections
        'px': '1px',
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}

