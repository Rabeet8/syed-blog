
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
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
				neobrutalism: {
					blue: '#4361EE',
					lightblue: '#7FB5FF',
					yellow: '#FFBE0B',
					pink: '#F72585',
					black: '#000000',
					white: '#FFFFFF',
					offwhite: '#F5F5F5',
					gray: '#D3D3D3',
					green: '#36B37E',
				},
			},
			fontFamily: {
				sans: ['Space Grotesk', 'sans-serif'],
				mono: ['Space Mono', 'monospace'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				none: '0',
			},
			borderWidth: {
				'3': '3px',
				'4': '4px',
				'6': '6px',
			},
			boxShadow: {
				'brutal': '4px 4px 0 0 #000',
				'brutal-lg': '8px 8px 0 0 #000',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				wiggle: {
					'0%, 100%': { transform: 'rotate(-2deg)' },
					'50%': { transform: 'rotate(2deg)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'wiggle': 'wiggle 0.3s ease-in-out',
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '100%',
						'h1, h2, h3, h4': {
							fontWeight: '700',
							fontFamily: 'Space Mono, monospace',
						},
						'pre': {
							backgroundColor: '#000',
							color: '#FFF',
							border: '4px solid #333',
							padding: '1rem',
							borderRadius: '0',
							boxShadow: '4px 4px 0 0 #000',
						},
						'code': {
							backgroundColor: '#F5F5F5',
							color: '#F72585',
							fontFamily: 'Space Mono, monospace',
							padding: '0.1rem 0.3rem',
							borderRadius: '0',
							border: '2px solid #000',
						},
						'a': {
							color: '#4361EE',
							textDecoration: 'underline',
							fontWeight: '600',
						},
						'blockquote': {
							borderLeft: '4px solid #FFBE0B',
							fontStyle: 'normal',
							fontWeight: '500',
							backgroundColor: '#F5F5F5',
							padding: '1rem',
						}
					},
				},
			},
		}
	},
	plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
} satisfies Config;
