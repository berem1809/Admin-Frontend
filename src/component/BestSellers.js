import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import Tea1 from "../images/tea1.webp";
import Tea2 from "../images/tea2.webp";
import Tea3 from"../images/tea3.webp";
import Tea4 from "../images/tea4.webp";
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

export default function BestSellers() {
  return (
    <Box sx={{ flexGrow: 1 ,width:"100%"}}>
      <Grid container spacing={2}sx={{marginLeft:"50px",marginRight:"50px"}}>
          <Grid size={{ xs: 3, md: 3 }} >
          <Item sx={{height:"450px"}}>
          <Card sx={{ maxWidth: 345,height:"450px",borderRadius:"0",boxShadow:"none"}}>
          <CardActionArea>
          <CardMedia
            component="img"
            height="320"
            image={Tea1}
            alt="green iguana"
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontSize:"22px",fontWeight:"400",fontFamily:"Poppin"}}>
          Camomile & Lemongrass
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Rs.550
            </Typography>
          </CardContent>
        </CardActionArea>
        </Card>
        </Item>
        </Grid>
{/*--------------------------------------------------------------------------------- */}
        <Grid size={{ xs: 3, md: 3 }}>
        <Item sx={{height:"450px"}}>
        <Card sx={{ maxWidth: 345,height:"450px",borderRadius:"0",boxShadow:"none"}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="320"
            image={Tea2}
            alt="green iguana"
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontSize:"22px",fontWeight:"400",fontFamily:"Poppin"}}>
          Mixed Berries & Hibiscus
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Rs.610
            </Typography>
          </CardContent>
        </CardActionArea>
        </Card>
        </Item>
        </Grid>
{/*--------------------------------------------------------------------------------- */}
        <Grid size={{ xs: 3, md: 3 }}>
        <Item sx={{height:"450px"}}>
        <Card sx={{ maxWidth: 345,height:"450px",borderRadius:"0",boxShadow:"none"}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="320"
            image={Tea3}
            alt="green iguana"
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontSize:"22px",fontWeight:"400",fontFamily:"Poppin"}}>
          Detox Infusion
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Rs.610
            </Typography>
          </CardContent>
        </CardActionArea>
        </Card>
        </Item>
        </Grid>
{/*--------------------------------------------------------------------------------- */}
        <Grid size={{ xs: 3, md: 3 }}>
        <Item sx={{height:"450px"}}>
        <Card sx={{ maxWidth: 345,height:"450px",borderRadius:"0",boxShadow:"none"}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="320"
            image={Tea4}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{fontSize:"22px",fontWeight:"400",fontFamily:"Poppin"}}>
            Peach & Passion fruit
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Rs.440
            </Typography>
          </CardContent>
        </CardActionArea>
        </Card>
        </Item>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4,mr:"50px" }}>
        <Button variant="outlined" style={{borderColor:"#c9c6b9",color:"green",fontFamily:"Poppin"}}>View All Products</Button>
      </Box>
      </Box>
  );
}
