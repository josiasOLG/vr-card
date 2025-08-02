import React from 'react';
import { Alert, Container, Typography, Box, Button, Fade } from '@mui/material';

interface ErrorDisplayProps {
  message: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  const handleRetry = () => {
    window.location.reload();
  };

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
              maxWidth: 450,
              mx: 'auto',
              textAlign: 'center',
            }}
          >
            <Box
              sx={{
                backgroundColor: '#ffffff',
                borderRadius: 2,
                p: { xs: 3, sm: 4 },
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                mb: 3,
              }}
            >
              <Box
                sx={{
                  fontSize: '2rem',
                  mb: 2,
                }}
              >
                😕
              </Box>

              <Typography 
                variant="h5" 
                sx={{
                  fontWeight: 600,
                  color: '#d32f2f',
                  mb: 2,
                  fontSize: '1.25rem',
                }}
              >
                Algo deu errado
              </Typography>

              <Alert 
                severity="error" 
                sx={{
                  mb: 2,
                  borderRadius: 1,
                  '& .MuiAlert-message': {
                    fontSize: '0.9rem',
                  }
                }}
              >
                {message}
              </Alert>

              <Typography 
                variant="body2" 
                sx={{
                  color: '#757575',
                  mb: 3,
                  lineHeight: 1.5,
                  fontSize: '0.9rem',
                }}
              >
                Não conseguimos carregar os produtos no momento. 
                Verifique sua conexão e tente novamente.
              </Typography>

              <Button
                variant="contained"
                onClick={handleRetry}
                sx={{
                  backgroundColor: '#455a64',
                  color: 'white',
                  fontWeight: 500,
                  px: 3,
                  py: 1,
                  borderRadius: 1,
                  textTransform: 'none',
                  fontSize: '0.9rem',
                  '&:hover': {
                    backgroundColor: '#37474f',
                  },
                }}
              >
                Tentar Novamente
              </Button>
            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default ErrorDisplay;
