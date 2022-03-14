import "../styles/globals.css"
import type { AppProps } from "next/app"

if (process.env.NEXT_PUBLIC_ENABLE_API_MOCKING === "true") {
  if (typeof window !== "undefined") {
    const { worker } = require("../mocks/browser")
    worker.start()
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
