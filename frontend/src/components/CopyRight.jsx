import * as React from 'react';
import Link from '@mui/material/Link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typography from '@mui/material/Typography';

export default function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        MMB Blockchain
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
