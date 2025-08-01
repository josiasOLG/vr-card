'use client';

import React from "react";

const App = () => {
  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '24px',
      margin: '16px 0',
      backgroundColor: 'white',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#1976d2', marginTop: 0 }}>Card Microfrontend</h2>
      <p style={{ color: '#666', lineHeight: '1.6' }}>
        Este é um componente de card carregado dinamicamente como microfrontend.
        Ele pode conter qualquer conteúdo ou funcionalidade específica.
      </p>
      <div style={{
        backgroundColor: '#f5f5f5',
        padding: '16px',
        borderRadius: '4px',
        marginTop: '16px'
      }}>
        <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>Funcionalidades:</h3>
        <ul style={{ margin: 0, paddingLeft: '20px', color: '#666' }}>
          <li>Carregamento dinâmico</li>
          <li>Isolamento de dependências</li>
          <li>Desenvolvimento independente</li>
          <li>Deploy separado</li>
        </ul>
      </div>
      <button style={{
        backgroundColor: '#1976d2',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '4px',
        marginTop: '16px',
        cursor: 'pointer'
      }}>
        Ação do Card
      </button>
    </div>
  );
};

export default App;
