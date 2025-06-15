
import type { Config } from "tailwindcss";

export default {
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
			fontFamily: {
				'sans': ['Space Mono', 'monospace'],
				'pixel': ['Orbitron', 'monospace'],
				'mono': ['Space Mono', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#FFA500',
					foreground: '#000000'
				},
				secondary: {
					DEFAULT: '#666666',
					foreground: '#FFFFFF'
				},
				accent: {
					DEFAULT: '#000000',
					foreground: '#FFA500'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Pixel Mango Brand Colors
				mango: {
					50: '#FFF7ED',
					100: '#FFEDD5',
					200: '#FED7AA',
					300: '#FDBA74',
					400: '#FB923C',
					500: '#FFA500',
					600: '#EA580C',
					700: '#C2410C',
					800: '#9A3412',
					900: '#7C2D12',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'pixel-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px #FFA500, 0 0 10px #FFA500, 0 0 15px #FFA500',
						filter: 'brightness(1)'
					},
					'50%': { 
						boxShadow: '0 0 10px #FFA500, 0 0 20px #FFA500, 0 0 30px #FFA500',
						filter: 'brightness(1.2)'
					}
				},
				'pixel-shift': {
					'0%, 100%': { transform: 'translate(0)' },
					'25%': { transform: 'translate(1px, 0)' },
					'50%': { transform: 'translate(0, 1px)' },
					'75%': { transform: 'translate(-1px, 0)' }
				},
				'pixel-float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-8px)' }
				},
				'block-slide': {
					'from': { transform: 'translateX(-100%)', opacity: '0' },
					'to': { transform: 'translateX(0)', opacity: '1' }
				}
			},
			animation: {
				'pixel-glow': 'pixel-glow 2s ease-in-out infinite',
				'pixel-shift': 'pixel-shift 0.3s ease-in-out',
				'pixel-float': 'pixel-float 3s ease-in-out infinite',
				'block-slide': 'block-slide 0.6s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
