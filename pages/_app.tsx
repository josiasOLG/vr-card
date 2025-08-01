'use client';

import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  // Para microfrontends, mantemos simples
  return <Component {...pageProps} />;
}
