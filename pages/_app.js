import '@/styles/globals.css'
import CursorBubble from '@/components/cursor/CursorBubble'
import ScrollReveal from '@/components/motion/ScrollReveal'

export default function App({ Component, pageProps }) {
  return <><Component {...pageProps} /><ScrollReveal /><CursorBubble /></>
}
