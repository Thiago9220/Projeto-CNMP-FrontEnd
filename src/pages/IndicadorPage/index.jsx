import React from 'react';
import { Typography, Button, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

function IndicatorsPage() {

  const indicators = [
    { id: 1, name: 'Indicador 1', value: 10 },
    { id: 2, name: 'Indicador 2', value: 20 },
    { id: 3, name: 'Indicador 3', value: 30 },
  ];

  const handleNewIndicatorClick = () => {

    console.log('Novo indicador clicado');
  };

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
          {indicators.map((indicator) => (
            <TableRow key={indicator.id}>
              <TableCell>{indicator.id}</TableCell>
              <TableCell>{indicator.name}</TableCell>
              <TableCell>{indicator.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default IndicatorsPage;
