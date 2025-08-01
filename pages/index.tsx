'use client';

import dynamic from 'next/dynamic';

// Carrega o componente apenas no cliente para evitar problemas de SSR
const App = dynamic(() => import("../components/App"), {
  ssr: false,
  loading: () => <div>Carregando card...</div>
});

export default function Home() {
  return <App />;
}
