import {
  Playfair_Display,
  Quicksand,
  Cinzel,
  Bodoni_Moda,
} from 'next/font/google'
import styles from './[locale]/page.module.css'

export const quicksand = Quicksand({ subsets: ['latin'], display: 'swap' })
export const cinzel = Cinzel({ subsets: ['latin'], display: 'swap' })
export const bodoni_moda = Bodoni_Moda({ subsets: ['latin'], display: 'swap' })

export const playfair_display = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
})
