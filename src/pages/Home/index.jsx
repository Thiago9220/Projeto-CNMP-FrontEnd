import React from 'react';
import {
  Button,
  Box,
  Typography,
  Container,
  Link,
  Grid,
  AppBar,
  Toolbar,
} from '@mui/material';

function HomePage() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Channel
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md">
        <Box sx={{ my: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Bem-vindo!
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Acesse os indicadores.
          </Typography>

          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              <Button variant="contained" color="primary" href="/login">
                Login
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="secondary" href="/register">
                Registrar
              </Button>
            </Grid>
          </Grid>
        </Box>
        
      </Container>

      <Box component="footer" sx={{ bgcolor: 'lightgray', p: 3, mt: 4 }}>
        <Typography variant="body2" color="textSecondary" align="center">
          &copy; {new Date().getFullYear()} Channel. Todos os direitos reservados.
        </Typography>
      </Box>
    </div>
  );
}

export default HomePage;
