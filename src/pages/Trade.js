import React from 'react'
import NavBar from '../component/NavBar'
import Video from "../video/video.mp4";
import Footer from "../component/Footer";
import Logo from  "../images/logo.png";
import { styled } from '@mui/material/styles';
import Trade_1 from "../images/Trade_1.jpg";
import Trade2 from "../images/Trade2.jpg";
import { Typography, Box, Paper, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import Trade_map from "../images/Trade_map.webp";
import Trade_Herbal from "../images/Trade_Herbal.webp";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));


 const Trade = () => {
    const divHeader={
        // backgroundColor:'pink',
        minHeight:'100vh'
        }
        const item2={
        maxWidth:'100%',
            height:'70vh',
            marginTop:'0',
            position:"relative",
            backgroundColor:"pink"
        }
        const overlayText = {
            position: 'absolute',
            top: '40%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', 
        };
        const partOne={
            
        };
        const partTwo={
            fontSize:'60px'
        };
    
  return (
    <>
    {/*------------------------------------------------------------viewport 01------------------------------------------------------ */}
    <div style={divHeader}>
       <img src={Logo} style={{width:"200px",height:"120px",marginTop:"10px"}}/>
        <NavBar/>
    <div >
    <Stack spacing={2}>
    <Item style={{backgroundColor:'#204436',color:"white",height:"30px",paddingTop:"12px"}}>Special offers happening now !</Item>
    <Item style={item2}>
            <img src={Trade2} style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
          }}/>
            <div style={overlayText}>
            <span style={partOne}>Welcome to the </span><br></br>
            <span style={partTwo}>TEA CUPS PREMIUM <br></br></span>
            <span>Srilanka</span>
            </div>
        </Item>
    </Stack>
    </div>
    </div>
{/*-------------------------------------------------------viewport 2------------------------------------------------------------- */}
<Grid container spacing={0} sx={{ alignItems: "center", justifyContent: "center",marginTop:"80px" }}>
        {/*--------------------------------Grid 01 -------------------------------------- */}
        <Grid item xs={12}>
            <Grid 
            container
            spacing={6} 
            sx={{
            display: 'flex', 
            flexWrap: 'nowrap', 
            '@media (max-width: 600px)': { 
                flexWrap: 'wrap', 
            },
            marginLeft: { xs: '20px', sm: '200px' }, 
            marginRight: { xs: '20px', sm: '220px' }, 
            minHeight: "100vh", 
            // backgroundColor: "purple", 
            }}
        >
        
          <Grid 
            item 
            xs={12} 
            sm={8} 
            sx={{ flexGrow: 1,maxWidth: '50%','@media (max-width: 600px)': {maxWidth: '100%' } }}>
            <Box sx={{ p: 2}}>
            <Typography variant="body2" sx={{
                 fontSize: { xs: "20px", sm: "30px" },   
                 textAlign: "justify",
                 fontFamily: "Futura",
                 fontWeight:"600",
                 lineHeight:"1.5",
                 letterSpacing:"1px"
             
            }}> 
            PREMIUM WHOLESALE TEA SUPPLIER 
            </Typography>
            <Typography variant="body2" sx={{
                 fontSize: { xs: "20px", sm: "30px" },   
                 textAlign: "justify",
                 fontFamily: "Futura",
                 fontWeight:"610",
                 lineHeight:"1.5",
                 letterSpacing:"0"
            
            }}> 
           HIGH QUALITY TEA FOR YOUR BUSINESS 
            </Typography>

              <Typography variant="body2" sx={{
                 fontSize: { xs: "16px", sm: "18px" },   
                 textAlign: "justify",
                 fontFamily: "AGaramondPro",
                 fontWeight:"400",
                 marginTop:"30px"
             
            }}>   Leveraging our global network, years of experience, expertise and ethical
            sourcing we are trusted suppliers of wholesale tea / bulk tea. If you are looking
            for a reliable wholesale tea supplier, look no further. We offer premium loose-leaf
            tea blends sourced from the finest tea gardens around the world. From classic black
            tea to delicate green tea and refreshing herbal tea, we have an extensive range of
            tea varieties to cater to your customers’ diverse tastes.
               </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4,mr:"10px" ,width:"100%"}}>
            <Button variant="outlined" color="success" sx={{width:"100%",marginLeft:"0px",fontFamily:"Poppin", letterSpacing:"2px"}}>Contact Us </Button>   
            </Box>
          </Grid>
          <Grid 
            item 
            xs={12} 
            sm={4} 
            sx={{  flexShrink: 0,maxWidth: '50%', '@media (max-width: 600px)': {maxWidth: '100%'}}}>
            <img 
              src={Trade_1} 
              alt="Sri Lanka Tea" 
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
          </Grid>
        </Grid>
        </Grid>

        {/*--------------------------------Grid 02 -------------------------------------- */}
        <Grid item xs={12} sx={{minHeight:"100ch"}}>
        <Typography variant="body2" sx={{
                 fontSize: { xs: "20px", sm: "30px" },   
                 textAlign: "justify",
                 fontFamily: "Futura",
                 fontWeight:"600",
                 lineHeight:"1.5",
                 letterSpacing:"0",
                 textAlign:"center"
                            }}> 
           SOURCING THE PREMIUM TEAS
            </Typography>

              <Typography variant="body2" sx={{
                 fontSize: { xs: "16px", sm: "18px" },   
                 textAlign: "justify",
                 fontFamily: "AGaramondPro",
                 fontWeight:"400",
                 marginTop:"30px",
                 textAlign:"center"
             
            }}>   Explore the world of Ahmad Tea and learn where we source some 
            of the finest quality leaves that go into our masterful blends.
               </Typography>
               <img src={Trade_map}
                    alt="World map"
                    sx={{maxWidth:{xs:"80%",sm:"80%",md:"60%"},height:"auto",mx:"auto",mt:"2"}}
                    />
      </Grid>
{/*-------------------------------------------------------grid 03------------------------------------------------------------- */}
<Grid item xs={12}>
    <Grid 
        container spacing={6} 
        sx={{
            display: 'flex', 
            flexWrap: 'nowrap', 
            '@media (max-width: 600px)': { 
                flexWrap: 'wrap', 
            },
            marginLeft: { xs: '20px', sm: '200px' }, 
            marginRight: { xs: '20px', sm: '220px' }, 
            minHeight: "100vh", 
            // backgroundColor: "purple", 
            }}
    >
          <Grid item xs={12} sm={4} 
            sx={{  flexShrink: 0,maxWidth: '45%', '@media (max-width: 600px)': {maxWidth: '100%'}}}>
                <Typography variant="body2" sx={{
                 fontSize: { xs: "20px", sm: "30px" },   
                 textAlign: "justify",
                 fontFamily: "Futura",
                 fontWeight:"610",
                 lineHeight:"1.5",
                 letterSpacing:"0",
                 marginLeft:{xs:"10px",sm:"30px"},
                 marginTop:{xs:"80px", sm:"150px"}
            }}>HERBAL BULK TRADING</Typography>
               <Typography variant="body2" sx={{
                 fontSize: { xs: "16px", sm: "18px" },   
                 textAlign: "justify",
                 fontFamily: "AGaramondPro",
                 fontWeight:"400",
                 marginLeft:{xs:"10px",sm:"30px"},
                 marginTop:{xs:"5px", sm:"20px"}
            }}>
                In addition to our wide range of tea offerings, Ahmad Tea
                is pleased to provide bulk quantities of herbal ingredients
                to our clients. Taking it a step further, we are also capable
                of creating unique herbal blends in bulk quantities, tailored to
                meet the specific requirements of our customers, offering numerous health benefits.
              </Typography>
          </Grid>
          <Grid 
            item 
            xs={12} 
            sm={6} 
            sx={{ flexGrow: 1,maxWidth: '55%','@media (max-width: 600px)': {maxWidth: '100%' } }}>
            <Box sx={{ p: 2 }}>
              <img
              src={Trade_Herbal}
              alt="Kandy image "
              style={{ width: '100%', minHeight: 'auto',height:"460px", objectFit: 'cover' }} />
            </Box>
          </Grid>
        </Grid>
      </Grid>      
      
</Grid>
    
{/*-------------------------------------------------------Footer------------------------------------------------------------- */}
<Box
    sx={{
        backgroundColor: '#294836',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 3, sm: 5 },
        textAlign: { sm: 'center', md: 'left' },
        justifyContent: 'space-between',
        width: '100%',
        marginLeft: '0',
        marginRight: '0',
        color:"#ffffff"
    }}
    >
        <Footer/>
    </Box>
    </>
  )
};
export default Trade;
