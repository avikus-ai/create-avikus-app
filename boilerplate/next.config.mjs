import withBundleAnalyzer from "@next/bundle-analyzer"
import { env } from "./src/env.mjs"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

export default withBundleAnalyzer({ enabled: env.ANALYZE })(nextConfig)
