import '../styles/tailwind.css'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
