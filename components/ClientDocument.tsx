'use client';

import dynamic from 'next/dynamic';

interface ClientDocumentProps {
  children: React.ReactNode;
}

function DocumentWrapper({ children }: ClientDocumentProps) {
  return <>{children}</>;
}

const ClientDocument = dynamic(() => Promise.resolve(DocumentWrapper), {
  ssr: false,
});

export default ClientDocument;
