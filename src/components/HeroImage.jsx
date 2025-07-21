import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * Imagem hero responsiva com texto centralizado.
 * @param {string} imageUrl - Caminho da imagem de fundo.
 * @param {string} text - Texto sobreposto.
 */
const HeroImage = ({ imageUrl, text }) => (
  <Box
    sx={{
      width: '100%',
      minHeight: { xs: 220, sm: 320, md: 400 },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      boxShadow: 2,
      margin: 0,
      padding: 0,
    }}
  >
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        bgcolor: 'rgba(0,0,0,0.45)',
        zIndex: 1,
      }}
    />
    <Typography
      variant="h2"
      sx={{
        color: '#fff',
        fontWeight: 700,
        textAlign: 'center',
        zIndex: 2,
        width: '100%',
        position: 'relative',
        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
      }}
    >
      {text}
    </Typography>
  </Box>
);

export default HeroImage;
