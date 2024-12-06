import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import ContactImg from "../images/contact.jpeg";
import Button from '@mui/material/Button';
import ContactUsForm from './ContactUsForm';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function Contact() {
  return (
    <Box sx={{ display: 'flex', width: '100%', height: '520px' }}>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          textAlign: 'center',
          fontSize:"16px",
          textAlign: 'justify',
          marginLeft:"12px",
          color:"#666564",
          fontFamily:"Poppin",
          lineHeight: '1.8',
        }}
      >
        <ContactUsForm/>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4,mr:"50px" }}>
        <Button variant="contained" color="success" sx={{width:"380px",marginLeft:"30px"}}>Submit </Button>   
        </Box>
      </Box>
      
      <Box
        sx={{
          flex: 2,
          backgroundImage: `url(${ContactImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></Box>
    </Box>
  );
}
