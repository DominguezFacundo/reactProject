import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ width: "100%", height:"100%", display: 'flex' }}>
      <CircularProgress size={150} sx={{ margin: "auto auto" }} />
    </Box>
  );
}