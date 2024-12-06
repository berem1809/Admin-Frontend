import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ContactUsForm() {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '380px' ,marginLeft:"30px"} }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="Message" variant="outlined"
        multiline
        rows={4}/>

    </Box>
  );
}
