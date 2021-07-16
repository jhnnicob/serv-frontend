import React from 'react';
import Typography from '@material-ui/core/Typography';

export function Title(props) {
  return (
    <Typography component="h2" variant="h6" gutterBottom>
      {props.children}
    </Typography>
  );
}
