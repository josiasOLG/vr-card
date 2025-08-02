import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { Product } from '../../core/interfaces';
import ProductCard from '../molecules/ProductCard';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  if (products.length === 0) {
    return (
      <Paper
        elevation={0}
        sx={{
          p: 5,
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          borderRadius: 2,
          border: '1px solid rgba(0, 0, 0, 0.05)'
        }}
      >
        <Typography 
          variant="h6" 
          sx={{ 
            color: '#757575',
            fontSize: '1.1rem',
            fontWeight: 500
          }}
        >
          Nenhum produto encontrado
        </Typography>
      </Paper>
    );
  }

  return (
    <Grid 
      container 
      spacing={{ xs: 2, sm: 3 }}
      sx={{
        display: 'flex',
        alignItems: 'stretch'
      }}
    >
      {products.map((product) => (
        <Grid 
          item 
          xs={12} 
          sm={6} 
          md={4} 
          lg={3} 
          key={product.id} 
          sx={{ 
            display: 'flex',
            mb: 2
          }}
        >
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;
