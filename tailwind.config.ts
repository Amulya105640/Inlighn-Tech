
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
  "./src/**/*.{ts,tsx}"],

  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        // InlightN Tech Brand Colors
        brand: {
          primary: 'hsl(var(--brand-primary))', // Orange
          secondary: 'hsl(var(--brand-secondary))', // Teal
          accent: 'hsl(var(--brand-accent))', // Light Teal
          dark: 'hsl(var(--brand-dark))', // Dark Teal
          light: 'hsl(var(--brand-light))' // Very Light Teal
        },
        saas: {
          blue: '#4F46E5',
          purple: '#8B5CF6',
          'light-blue': '#60A5FA',
          'light-purple': '#A78BFA'
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        },
        'brand-pulse': {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '.7'
          }
        },
        'brand-glow': {
          '0%, 100%': {
            'box-shadow': '0 0 20px hsla(var(--brand-accent), 0.3)'
          },
          '50%': {
            'box-shadow': '0 0 30px hsla(var(--brand-accent), 0.5)'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        float: 'float 6s ease-in-out infinite',
        'brand-pulse': 'brand-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'brand-glow': 'brand-glow 2s ease-in-out infinite alternate'
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config;