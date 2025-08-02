'use client';

import React, { useState, useEffect } from "react";
import { Container, Box, Fade } from '@mui/material';
import { productService } from '../core/http/services/productService';
import { Product } from '../core/interfaces';
import { Loading, ErrorDisplay, PageHeader, ProductGrid } from './';

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await productService.getAllProducts({ 
          limit: 12, 
          skip: 0 
        });
        setProducts(response.products);
        setTotal(response.total);
      } catch (err) {
        setError('Erro ao carregar produtos');
        console.error('Erro ao buscar produtos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorDisplay message={error} />;

  return (
    <Box 
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f7f9',
        position: 'relative',
      }}
    >
      <Container 
        maxWidth="xl" 
        sx={{ 
          position: 'relative', 
          zIndex: 1,
          py: { xs: 3, sm: 4 }
        }}
      >
        <Fade in={true} timeout={600}>
          <Box>
            <PageHeader 
              title="Catálogo de Produtos"
              subtitle="Microfrontend de Produtos"
              description={`Total de ${total} produtos disponíveis`}
            />
            <ProductGrid products={products} />
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default App;
