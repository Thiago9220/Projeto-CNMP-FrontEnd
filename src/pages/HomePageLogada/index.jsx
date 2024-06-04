import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';

function HomePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return (
          <div>
            <Typography variant="h4">Dashboard</Typography>

          </div>
        );
      case 'indicadores':
        return (
          <div>
            <Typography variant="h4" gutterBottom>
              Indicadores
            </Typography>
            <Button variant="contained" color="primary" onClick={handleNewIndicatorClick} sx={{ mb: 2 }}>
              Novo Indicador
            </Button>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Nome</TableCell>
                  <TableCell>Valor</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              </TableBody>
            </Table>
          </div>
        );
      default:
        return null;
    }
  };

  const handleMenuItemClick = (page) => {
    setCurrentPage(page);
    setDrawerOpen(false);
  };

  const handleNewIndicatorClick = () => {

    console.log('Novo indicador clicado');
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            Channel
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar alt="Foto do Usuário" src="/path/to/your/image.jpg" sx={{ mr: 2 }} />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="body1" sx={{ mb: 0 }}>
                Nome do Usuário
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cargo do Usuário
              </Typography>
            </Box>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List>
          <ListItem button onClick={() => handleMenuItemClick('dashboard')}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('indicadores')}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Indicadores" />
          </ListItem>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {renderPage()}
      </Box>
    </div>
  );
}

export default HomePage;
