import React from 'react';
import { CircularProgress, Container, Typography, Box, Fade } from '@mui/material';

const Loading: React.FC = () => {
  return (
    <Box 
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f7f9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container>
        <Fade in={true} timeout={600}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              backgroundColor: '#ffffff',
              borderRadius: 2,
              p: { xs: 3, sm: 5 },
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              maxWidth: 360,
              mx: 'auto',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                display: 'inline-flex',
                mb: 3,
              }}
            >
              <CircularProgress 
                size={60} 
                thickness={3}
                sx={{
                  color: '#455a64',
                  animationDuration: '1.2s',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '1.4rem',
                }}
              >
                🛍️
              </Box>
            </Box>

            <Typography 
              variant="h6" 
              sx={{
                fontWeight: 600,
                color: '#455a64',
                mb: 1,
                fontSize: '1.1rem',
              }}
            >
              Carregando Produtos...
            </Typography>

            <Typography 
              variant="body2" 
              sx={{
                color: '#757575',
                fontWeight: 400,
                fontSize: '0.9rem',
              }}
            >
              Aguarde enquanto preparamos tudo para você
            </Typography>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default Loading;
