import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Chip,
  Box,
  CardActions,
  Button
} from '@mui/material';
import { Product } from '../../core/interfaces';

interface ProductCardProps {
  product: Product;
}

const useSafeCart = () => {
  try {
    const { useCart } = require('host/useCart');
    return useCart();
  } catch (error) {
    console.warn('Cart hook not available:', error);
    return {
      addToCart: () => console.log('Cart not available'),
      openCartModal: () => console.log('Cart modal not available')
    };
  }
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, openCartModal } = useSafeCart();

  const handleAddToCart = () => {
    addToCart(product);
    openCartModal();
  };

  const formatPrice = (price: number, discountPercentage?: number) => {
    if (discountPercentage && discountPercentage > 0) {
      const discountedPrice = price * (1 - discountPercentage / 100);
      return {
        original: price.toFixed(2),
        discounted: discountedPrice.toFixed(2),
        hasDiscount: true
      };
    }
    return {
      original: price.toFixed(2),
      hasDiscount: false
    };
  };

  const priceInfo = formatPrice(product.price, product.discountPercentage);

  return (
    <Card 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'box-shadow 0.3s ease',
        '&:hover': {
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'
        },
        backgroundColor: '#ffffff',
        borderRadius: 2,
        border: '1px solid #f0f0f0',
      }}
      elevation={1}
    >
      <CardMedia
        component="img"
        height="180"
        image={product.thumbnail || '/placeholder-product.jpg'}
        alt={product.title}
        sx={{
          height: '180px',
          objectFit: 'cover',
          borderBottom: '1px solid #f0f0f0'
        }}
      />
      
      <CardContent sx={{ 
        flexGrow: 1, 
        p: 3,
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Box sx={{ mb: 1.5 }}>
          <Chip 
            label={product.category} 
            size="small" 
            sx={{
              backgroundColor: '#f5f5f5',
              color: '#505050',
              fontWeight: 500,
              fontSize: '0.7rem',
              border: '1px solid #e0e0e0',
              mb: 1,
            }}
          />
        </Box>
        
        <Typography 
          variant="subtitle1"
          component="h3" 
          sx={{
            fontWeight: 600,
            mb: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            height: '48px', 
            fontSize: '0.95rem',
            color: '#303030',
            lineHeight: 1.3
          }}
          title={product.title}
        >
          {product.title}
        </Typography>
        
        <Typography 
          variant="body2" 
          sx={{
            color: '#707070',
            mb: 2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            height: '60px',
            fontSize: '0.85rem',
            lineHeight: 1.4
          }}
        >
          {product.description}
        </Typography>
        
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mb: 1,
            mt: 'auto' 
          }}
        >
          <Rating 
            value={product.rating} 
            readOnly 
            precision={0.1} 
            size="small"
            sx={{ 
              fontSize: '0.85rem',
              color: '#666666'
            }}
          />
          <Typography 
            variant="caption" 
            sx={{ 
              ml: 0.5, 
              color: '#808080',
              fontSize: '0.75rem' 
            }}
          >
            ({product.rating})
          </Typography>
        </Box>
        
        <Box sx={{ mt: 1 }}>
          {priceInfo.hasDiscount ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#9e9e9e', 
                  textDecoration: 'line-through',
                  fontSize: '0.85rem'
                }}
              >
                ${priceInfo.original}
              </Typography>
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  color: '#2e7d32',
                  fontWeight: 700,
                  fontSize: '1rem'
                }}
              >
                ${priceInfo.discounted}
              </Typography>
            </Box>
          ) : (
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: '#455a64',
                fontWeight: 700,
                fontSize: '1rem'
              }}
            >
              ${priceInfo.original}
            </Typography>
          )}
        </Box>
      </CardContent>
      
      <CardActions sx={{ px: 3, pb: 3, pt: 0 }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#455a64',
            '&:hover': {
              backgroundColor: '#37474f',
            },
            textTransform: 'none',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
            fontWeight: 500,
            fontSize: '0.875rem',
            borderRadius: 1.5
          }}
          onClick={handleAddToCart}
        >
          🛒 Adicionar ao Carrinho
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
