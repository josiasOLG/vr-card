'use client';

import dynamic from 'next/dynamic';

interface ClientDocumentProps {
  children: React.ReactNode;
}

function DocumentWrapper({ children }: ClientDocumentProps) {
  return <>{children}</>;
}

// Carrega o Document apenas no lado do cliente
const ClientDocument = dynamic(() => Promise.resolve(DocumentWrapper), {
  ssr: false,
});

export default ClientDocument;
