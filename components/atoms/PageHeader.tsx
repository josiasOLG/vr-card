import React from 'react';
import { Typography, Box, Paper, Chip } from '@mui/material';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, description }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
        borderRadius: 2,
        p: { xs: 3, sm: 4 },
        mb: { xs: 3, sm: 4 },
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: '#455a64',
        }
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 60,
              height: 60,
              borderRadius: '50%',
              backgroundColor: '#f5f5f5',
              border: '1px solid #e0e0e0',
              color: '#455a64',
              mb: 2,
              fontSize: '1.5rem',
            }}
          >
            🏪
          </Box>
        </Box>

        <Typography 
          variant="h4" 
          component="h1" 
          sx={{
            fontWeight: 600,
            color: '#37474f',
            fontSize: { xs: '1.5rem', sm: '1.75rem' },
            mb: 1.5,
          }}
        >
          {title}
        </Typography>

        {subtitle && (
          <Chip
            label={subtitle}
            sx={{
              backgroundColor: '#f5f5f5',
              color: '#455a64',
              fontWeight: 500,
              fontSize: '0.75rem',
              height: 28,
              mb: 2,
              border: '1px solid #e0e0e0',
            }}
          />
        )}

        {description && (
          <Typography 
            variant="body1"
            sx={{
              color: '#757575',
              fontWeight: 400,
              maxWidth: 500,
              mx: 'auto',
              fontSize: '0.9rem',
              lineHeight: 1.5,
            }}
          >
            {description}
          </Typography>
        )}
      </Box>
    </Paper>
  );
};

export default PageHeader;
