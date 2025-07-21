import React from 'react';
import { Box, Button, Typography, Container, Card, CardContent, Grid, Avatar } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// Exemplo de depoimentos
const testimonials = [
  { name: 'João', text: 'Melhor estúdio da cidade!', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { name: 'Maria', text: 'Profissionais incríveis e ambiente seguro.', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
];

// Exemplo de cards de cursos
const cursos = [
  { title: 'Lettering', desc: 'Curso de técnicas de escrita artística para tatuagem, do básico ao avançado.' },
  { title: 'Realismo', desc: 'Curso de realismo para tatuadores, focado em sombreamento, textura e retratos.' },
];

export default function LandingPage() {
  return (
    // Container principal impede overflow lateral
    <Box sx={{ width: '100%', overflowX: 'initial', m: 0, p: 0 }}>
      {/* Hero Section */}
      {/* Hero responsivo */}
      <Box
        sx={{
          minHeight: { xs: '80vh', md: '100vh' },
          minWidth: '100vw',
          bgcolor: '#000',
          backgroundImage: `url('src/assets/img/background.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          px: { xs: 1, sm: 2, md: 0 },
          // overflowX removido para evitar corte lateral
        }}
      >
        {/* Overlay escurecido */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1,
          }}
        />

        {/* Conteúdo centralizado */}
        {/* Conteúdo centralizado e responsivo */}
        <Box
          sx={{
            zIndex: 2,
            textAlign: 'center',
            color: '#fff',
            px: { xs: 1, sm: 2 },
            width: { xs: '100%', sm: '80%', md: '60%' },
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, fontFamily: 'Great Vibes, cursive' }}
          >
            Gusta Ink
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontSize: { xs: '1.1rem', sm: '1.5rem', md: '2rem' } }}
          >
            Tatuagem com identidade, respeito e arte.
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<WhatsAppIcon />}
            href="https://wa.me/5517988326219?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20tatuagem!"
            sx={{ mt: 4, width: { xs: '100%', sm: 'auto' }, fontSize: { xs: '1rem', sm: '1.1rem' } }}
            className="whatsapp-btn"
          >
            Orçamento pelo WhatsApp
          </Button>
        </Box>
      </Box>

      {/* Carrossel de imagens */}
      <Container sx={{ py: 6 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontSize: { xs: '1.3rem', sm: '1.7rem', md: '2rem' }, fontFamily: 'Great Vibes, cursive' }}
        >
          Tatuagens
        </Typography>
        {/* Carrossel responsivo */}
        {/* Grid de 6 posts do Instagram */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' }, gap: 2, py: 2 }}>
          {["DMDPbAnRGs7","DL-KZlLsJ8b","DLSFyy0Ag6c","DKR8nzCNcVH","DJ1wAwTRj2c","DJuHV-zRmlS"].map((id, idx) => (
            <iframe
              key={idx}
              src={`https://www.instagram.com/p/${id}/embed`}
              width="100%"
              height="480"
              frameBorder="0"
              scrolling="no"
              allowtransparency="true"
              title={`Instagram Post ${idx+1}`}
              style={{ borderRadius: '12px', minWidth: 280, maxWidth: 400 }}
            ></iframe>
          ))}
        </Box>
      </Container>

      {/* Workshops - 2 cards, cada um em uma linha */}
      <Container sx={{ py: 6 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontSize: { xs: '1.7rem', sm: '2rem', md: '2.3rem' }, fontFamily: 'Great Vibes, cursive' }}
        >
          Workshops
        </Typography>
        <Grid container spacing={4} direction="column">
          <Grid item xs={12}>
            <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', p: 2 }}>
              <Box component="img" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" alt="Lettering" sx={{ width: 160, height: 120, borderRadius: 2, mr: { sm: 3 }, mb: { xs: 2, sm: 0 } }} />
              <Box>
                <Typography variant="h6" sx={{ fontFamily: 'Great Vibes, cursive', fontSize: '1.5rem' }}>Lettering</Typography>
                <Typography sx={{ fontSize: '1rem', mt: 1 }}>Curso de técnicas de escrita artística para tatuagem, do básico ao avançado.</Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', p: 2 }}>
              <Box component="img" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Realismo" sx={{ width: 160, height: 120, borderRadius: 2, mr: { sm: 3 }, mb: { xs: 2, sm: 0 } }} />
              <Box>
                <Typography variant="h6" sx={{ fontFamily: 'Great Vibes, cursive', fontSize: '1.5rem' }}>Realismo</Typography>
                <Typography sx={{ fontSize: '1rem', mt: 1 }}>Curso de realismo para tatuadores, focado em sombreamento, textura e retratos.</Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Contato - 2 cards, cada um em uma linha */}
      <Container sx={{ py: 6 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontSize: { xs: '1.7rem', sm: '2rem', md: '2.3rem' }, fontFamily: 'Great Vibes, cursive' }}
        >
          Contato
        </Typography>
        <Grid container spacing={4} direction="column">
          <Grid item xs={12}>
            <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', p: 2 }}>
              <Box component="img" src="https://randomuser.me/api/portraits/men/1.jpg" alt="João" sx={{ width: 80, height: 80, borderRadius: '50%', mr: { sm: 3 }, mb: { xs: 2, sm: 0 } }} />
              <Box>
                <Typography variant="h6" sx={{ fontFamily: 'Great Vibes, cursive', fontSize: '1.3rem' }}>João</Typography>
                <Typography sx={{ fontSize: '1rem', mt: 1 }}>Melhor estúdio da cidade!</Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', p: 2 }}>
              <Box component="img" src="https://randomuser.me/api/portraits/women/2.jpg" alt="Maria" sx={{ width: 80, height: 80, borderRadius: '50%', mr: { sm: 3 }, mb: { xs: 2, sm: 0 } }} />
              <Box>
                <Typography variant="h6" sx={{ fontFamily: 'Great Vibes, cursive', fontSize: '1.3rem' }}>Maria</Typography>
                <Typography sx={{ fontSize: '1rem', mt: 1 }}>Profissionais incríveis e ambiente seguro.</Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Chamada para ação final */}
      {/* Chamada para ação final responsiva */}
      <Box position='static' sx={{ py: { xs: 4, sm: 6 },  background: '#222', color: '#fff', textAlign: 'center' }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontSize: { xs: '1.3rem', sm: '1.7rem', md: '2rem' }, fontFamily: 'Great Vibes, cursive' }}
        >
          Localização
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.234964836624!2d-50.25318892460344!3d-20.28316828243409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9497f61a226a89eb%3A0xb2915b0b5c013f1f!2sR.%20Rio%20Grande%20do%20Sul%2C%201104%20-%20Centro%2C%20Fernand%C3%B3polis%20-%20SP%2C%2015600-000!5e0!3m2!1spt-BR!2sbr!4v1721550000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '12px', maxWidth: 600 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Localização"
          ></iframe>
        </Box>
        <Typography
          variant="h1"
          gutterBottom
          sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}
        >
          Agende sua sessão agora mesmo!
        </Typography>
        <Button
          variant="contained"
          size="large"
          startIcon={<WhatsAppIcon />}
          href="https://wa.me/5517988326219?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20tatuagem!"
          sx={{ mt: 2, width: { xs: '100%', sm: 'auto' }, fontSize: { xs: '1rem', sm: '1.1rem' } }}
          className="whatsapp-btn"
        >
          Fale conosco no WhatsApp
        </Button>
      </Box>
    </Box>
  );
}
