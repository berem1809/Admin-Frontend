import React from 'react';
import NavBar from '../component/NavBar';
import Video2 from "../video/Video2.mp4";
import Footer from "../component/Footer";
import Logo from  "../images/logo.png";
import { styled } from '@mui/material/styles';
import { Typography, Box, Paper, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Tea1 from "../images/tea1.webp";
import Srilanka from "../images/Story_Srilanka.webp";
import Kandy from "../images/Story_Kandy.avif";
import Kandy1 from "../images/Story_Kandy1.avif";
import Nuwa from "../images/Story_NuwaraEliya.avif";
import Nuwa2 from "../images/Story_NuwaraEliya2.avif";
import Ruhuna1 from "../images/Story_Ruhuna1.avif";
import Ruhuna from "../images/Story_Ruhuna.avif";
import Uda from "../images/Story_Uda.avif";
import Uda1 from "../images/Story_Uda1.avif";
import Uva1 from "../images/Story_Uva1.avif";
import Uva from "../images/Story_Uva.avif";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const Story = () => {
  const divHeader = {
    minHeight: '100vh',
  };

  const item2 = {
    width: 'auto',
    height: '70vh',
    marginTop: '0',
    position: "relative",
  };

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

  const partOne = {};
  const partTwo = {
    fontSize: '60px',
  };

  return (
    <>
      {/*------------------------------------------------------------viewport 01------------------------------------------------------ */}
      <div style={divHeader}>
        <img src={Logo} style={{ width: "200px", height: "120px", marginTop: "10px" }} />
        <NavBar />
        <div>
          <Stack spacing={2}>
            <Item style={{ backgroundColor: '#204436', color: "white", height: "30px", paddingTop: "12px" }}>
              Special offers happening now!
            </Item>
            <Item style={item2}>
              <video
                width="100%"
                height="100%"
                autoPlay
                loop
                muted
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              >
                <source src={Video2} />
              </video>
              <div style={overlayText}>
                <span style={partOne}>Welcome to the </span><br />
                <span style={partTwo}>TEA CUPS PREMIUM <br /></span>
                <span>Sri Lanka</span>
              </div>
            </Item>
          </Stack>
        </div>
      </div>

      {/*------------------------------------------------------------viewport 02------------------------------------------------------ */}
      <Grid container spacing={0} sx={{ alignItems: "center", justifyContent: "center" }}>
        {/*--------------------------------Grid 01 -------------------------------------- */}
        <Grid item xs={12}>
          <Grid container spacing={1} alignItems="center">
            <Typography variant="body2" sx={{
                 fontSize: { xs: "16px", sm: "18px" },  
                 lineHeight: "1.8",
                 marginTop: { xs: "40px", sm: "80px" },  
                 marginLeft: { xs: "20px", sm: "250px" },  
                 marginRight: { xs: "20px", sm: "250px" },  
                 textAlign: "justify",
                 fontFamily: "FuturaCyrillicLight",
                 letterSpacing: "1px",
                 fontWeight:"600"
            }}>
              Strange as it may seem, the story of Ceylon Tea begins with coffee. 
              The first tea bushes of commercial quantity were planted in Sri Lanka 
              by James Taylor, at Loolecondera Estate in Lower Hewaheta in the Kandy 
              district, in 1867. Since then, following the coffee blight in the mid-1800s, 
              all of the coffee which was replaced with tea.
            </Typography>
            <Typography variant="body2" sx={{
                 fontSize: { xs: "16px", sm: "18px" },  
                 lineHeight: "1.8",
                 marginTop: { xs: "40px", sm: "20px" },
                 marginBottom: { xs: "40px", sm: "80px" },  
                 marginLeft: { xs: "20px", sm: "250px" },  
                 marginRight: { xs: "20px", sm: "250px" },  
                 textAlign: "justify",
                 fontFamily: "FuturaCyrillicLight",
                 letterSpacing: "1px",
                 fontWeight:"600"

            }}> Taylor then set up the first tea “factory” on the island. 
              It was in fact a rather rudimentary setup. The factory soon became famous
              throughout the island. In 1872, Taylor invented a machine for rolling leaves,
              and one year later sent twenty-three pounds of tea to Mincing Lane. Taylor
              trained a number of assistants, and from that point on Ceylon tea arrived
              regularly in London and Melbourne. Its success led to the opening of an auction
              market in Colombo in 1883, and to the founding of a Colombo tea dealers’ 
              association in 1894.
            </Typography>
          </Grid>
        </Grid>

        {/*--------------------------------Grid 02 -------------------------------------- */}
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
            sm={4} 
            sx={{  flexShrink: 0,maxWidth: '50%', '@media (max-width: 600px)': {maxWidth: '100%'}}}>
            <img 
              src={Srilanka} 
              alt="Sri Lanka Tea" 
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
          </Grid>
          <Grid 
            item 
            xs={12} 
            sm={8} 
            sx={{ flexGrow: 1,maxWidth: '50%','@media (max-width: 600px)': {maxWidth: '100%' } }}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h6"
              sx={{textAlign:"left",
                    color:"#0e4535", 
                    fontWeight:"540",
                    fontSize:{xs:"28", sm:"40px"},
                    fontFamily:"Futura",
                    letterSpacing:"1.5"
              }}>TEA GROWING</Typography>
              <Typography variant="h6"
               sx={{textAlign:"left",
                color:"#0e4535", 
                fontWeight:"540",
                fontSize:{xs:"28", sm:"40px"},
                fontFamily:"Futura",
                letterSpacing:"1.5"
              }}> ELEVATIONS IN SRILANKA</Typography>
              <Typography variant="body2" sx={{
                 fontSize: { xs: "16px", sm: "18px" },   
                 textAlign: "justify",
                 fontFamily: "AGaramondPro",
                 fontWeight:"400",
             
            }}>  High grown Tea hails from the centre of the country’s hills, 
                at an elevation of over 6000ft above sea level and is commonly grown in the districts of 
                ‘Nuwara Eliya’, ‘Dimbula’ and ‘Uda Pussallawa’. Given the high elevation at which it is picked,
                the tea is bright in colour and greater in flavor and freshness, and thus is the most sought after.
               </Typography>
               <br></br>
               <Typography variant="body2" sx={{
                 fontSize: { xs: "16px", sm: "18px" },   
                 textAlign: "justify",
                 fontFamily: "AGaramondPro",
                 fontWeight:"400",
            }}>
                Mid grown tea is produced at an altitude of 2000 to 4000 ft. above sea level, 
                and is commonly found in the ‘Central’ and ‘Uva’ provinces of the country. The teas of the Central province 
                come from estates in the ‘Kandy’ region and are particularly flavoursome
                </Typography>
                <br></br>
                <Typography variant="body2" sx={{
                 fontSize: { xs: "16px", sm: "18px" },   
                 textAlign: "justify",
                 fontFamily: "AGaramondPro",
                 fontWeight:"400",
                
            }}>
                Produced relatively near the coast in the ‘Sabaragamuwa’ and ‘Southern’ 
                regions of Sri Lanka at an altitude of 2000ft; low-grown tea is characterized 
                by the very long leaves which turn intensely black when withered.
                </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
 {/*--------------------------------Grid 03 -------------------------------------- */}
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
            <img 
              src={Kandy} 
              alt="Sri Lanka Tea" 
              style={{ width:"60%",maxwidth: '100%', height: '300px', objectFit: 'cover' }} />
              <Typography variant="h6"
              sx={{textAlign:"left",
                    color:"#0e4535", 
                    fontWeight:"540",
                    fontSize:{xs:"28", sm:"40px"},
                    fontFamily:"Futura",
                    letterSpacing:"1.5",
                    marginLeft:{xs:"10px",sm:"30px"},
                    marginBottom:{xs:"5px",sm:"10px"}
              }}>KANDY</Typography>
               <Typography variant="body2" sx={{
                 fontSize: { xs: "16px", sm: "18px" },   
                 textAlign: "justify",
                 fontFamily: "AGaramondPro",
                 fontWeight:"400",
                 marginLeft:{xs:"10px",sm:"30px"}

            }}>
                In the Kandy district, where the industry began in 1867, the teas produced
                are described as “mid-grown”as cultivation does not exceed 1,300 m. They range
                in flavour depending on the altitude and whether the plantation is sheltered from 
                monsoon winds. All are particularly flavoursome. Kandy teas produce a bright infusion
                with a coppery tone, and are strong and intensely full-bodied.
              </Typography>
          </Grid>
          <Grid 
            item 
            xs={12} 
            sm={6} 
            sx={{ flexGrow: 1,maxWidth: '55%','@media (max-width: 600px)': {maxWidth: '100%' } }}>
            <Box sx={{ p: 2 }}>
              <img
              src={Kandy1}
              alt="Kandy image "
              style={{ width: '100%', minHeight: 'auto',height:"460px", objectFit: 'cover' }} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
       {/*--------------------------------Grid 04 -------------------------------------- */}
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
         <Grid 
            item 
            xs={12} 
            sm={6} 
            sx={{ flexGrow: 1,maxWidth: '55%','@media (max-width: 600px)': {maxWidth: '100%' } }}>
            <Box sx={{ p: 2 }}>
              <img
              src={Nuwa2}
              alt="Kandy image "
              style={{ width: '100%', minHeight: 'auto',height:"460px", objectFit: 'cover' }} />
            </Box>
          </Grid>

          <Grid item xs={12} sm={4} 
            sx={{  flexShrink: 0,maxWidth: '45%', '@media (max-width: 600px)': {maxWidth: '100%'}}}>
            <img 
              src={Nuwa} 
              alt="Nuwara Eliya" 
              style={{ width:"60%",maxwidth: '100%', height: '300px', objectFit: 'cover' }} />
              <Typography variant="h6"
              sx={{textAlign:"left",
                    color:"#0e4535", 
                    fontWeight:"540",
                    fontSize:{xs:"28", sm:"40px"},
                    fontFamily:"Futura",
                    letterSpacing:"1.5",
                    marginLeft:{xs:"10px",sm:"30px"},
                    marginBottom:{xs:"5px",sm:"10px"}
              }}>Nuwara Eliya</Typography>
               <Typography variant="body2" sx={{
                 fontSize: { xs: "16px", sm: "18px" },   
                 textAlign: "justify",
                 fontFamily: "AGaramondPro",
                 fontWeight:"400",
                 marginLeft:{xs:"10px",sm:"30px"}

            }}>
                Nuwara Eliya, the best-known of Sri Lanka’s tea-growing districts,
                 is the most mountainous, and has the highest average elevation. Combined 
                 with low temperature, this produces teas of exquisite bouquet. The infusion 
                 in the cup is the lightest (palest) of all the types of Ceylon Tea, with a 
                 golden hue and a delicately fragrant flavour. The whole-leaf Orange Pekoe (OP) 
                 and Broken Orange Pekoe (BOP) are the most sought after tea grades from the region.
              </Typography>
          </Grid>
         
        </Grid>
      </Grid>
       {/*--------------------------------Grid 05 -------------------------------------- */}
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
            <img 
              src={Uda} 
              alt="Nuwara Eliya" 
              style={{ width:"60%",maxwidth: '100%', height: '300px', objectFit: 'cover' }} />
              <Typography variant="h6"
              sx={{textAlign:"left",
                    color:"#0e4535", 
                    fontWeight:"540",
                    fontSize:{xs:"28", sm:"40px"},
                    fontFamily:"Futura",
                    letterSpacing:"1.5",
                    marginLeft:{xs:"10px",sm:"30px"},
                    marginBottom:{xs:"5px",sm:"10px"}
              }}>Uda Pussellawa</Typography>
               <Typography variant="body2" sx={{
                 fontSize: { xs: "16px", sm: "18px" },   
                 textAlign: "justify",
                 fontFamily: "AGaramondPro",
                 fontWeight:"400",
                 marginLeft:{xs:"10px",sm:"30px"}

            }}>
                The Uda Pussellawa district is situated close to Nuwara Eliya, 
                so its tea is often compared to that of its neighbour. But it is darker
                in the cup, with a pinkish hue, of greater strength, and exquisitely tangy.
                Colder conditions at year end supposedly add a hint of rose to the bouquet of
                a tea known for its medium body and subtle character. Heavy rainfall, though,
                tends to produce tea that is even darker and stronger-flavoured.
              </Typography>
          </Grid>
          <Grid 
            item 
            xs={12} 
            sm={6} 
            sx={{ flexGrow: 1,maxWidth: '55%','@media (max-width: 600px)': {maxWidth: '100%' } }}>
            <Box sx={{ p: 2 }}>
              <img
              src={Uda1}
              alt="Uda Pussellawa image "
              style={{ width: '100%', minHeight: 'auto',height:"460px", objectFit: 'cover' }} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
       {/*--------------------------------Grid 06 -------------------------------------- */}
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
          <Grid 
            item 
            xs={12} 
            sm={6} 
            sx={{ flexGrow: 1,maxWidth: '55%','@media (max-width: 600px)': {maxWidth: '100%' } }}>
            <Box sx={{ p: 2 }}>
              <img
              src={Uva1}
              alt="Uva "
              style={{ width: '100%', minHeight: 'auto',height:"460px", objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} 
            sx={{  flexShrink: 0,maxWidth: '45%', '@media (max-width: 600px)': {maxWidth: '100%'}}}>
            <img 
              src={Uva} 
              alt="Uva " 
              style={{ width:"60%",maxwidth: '100%', height: '300px', objectFit: 'cover' }} />
              <Typography variant="h6"
              sx={{textAlign:"left",
                    color:"#0e4535", 
                    fontWeight:"540",
                    fontSize:{xs:"28", sm:"40px"},
                    fontFamily:"Futura",
                    letterSpacing:"1.5",
                    marginLeft:{xs:"10px",sm:"30px"},
                    marginBottom:{xs:"5px",sm:"10px"}
              }}>Uva</Typography>
               <Typography variant="body2" sx={{
                 fontSize: { xs: "16px", sm: "18px" },   
                 textAlign: "justify",
                 fontFamily: "AGaramondPro",
                 fontWeight:"400",
                 marginLeft:{xs:"10px",sm:"30px"}

            }}>
                The remote Uva district is exposed to the winds of both 
                northeast and southwest monsoons, believed to endow the tea 
                produced here with a special, unmistakable character and exotically 
                aromatic flavour. It was with tea grown on his Uva estates that Thomas Lipton,
                the Victorian magnate, persuaded Americans to drink tea. The mellow, smooth taste
                of Uva tea, once experienced, is easily distinguished.
              </Typography>
          </Grid>
        
        </Grid>
      </Grid>
       {/*--------------------------------Grid 07 -------------------------------------- */}
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
            <img 
              src={Ruhuna} 
              alt="Ruhuna" 
              style={{ width:"60%",maxwidth: '100%', height: '300px', objectFit: 'cover' }} />
              <Typography variant="h6"
              sx={{textAlign:"left",
                    color:"#0e4535", 
                    fontWeight:"540",
                    fontSize:{xs:"28", sm:"40px"},
                    fontFamily:"Futura",
                    letterSpacing:"1.5",
                    marginLeft:{xs:"10px",sm:"30px"},
                    marginBottom:{xs:"5px",sm:"10px"}
              }}>Ruhuna</Typography>
               <Typography variant="body2" sx={{
                 fontSize: { xs: "16px", sm: "18px" },   
                 textAlign: "justify",
                 fontFamily: "AGaramondPro",
                 fontWeight:"400",
                 marginLeft:{xs:"10px",sm:"30px"}

            }}>
                The teas of the Ruhuna district are defined as “low-grown” as they are cultivated at
                an altitude not exceeding 600m comprising vast sub regions from coastal plains to Southern
                edge of Sinharaja Rain Forest. The soil, combined with the low elevation of the estates
                causes the tea-bush to grow rapidly, producing a long, beautiful leaf. Full-flavoured black
                tea is a distinctively unique Ruhuna specialty. Ruhuna factories produce a wide variety of
                leaf styles and sizes, including prized “tips”
              </Typography>
          </Grid>
          <Grid 
            item 
            xs={12} 
            sm={6} 
            sx={{ flexGrow: 1,maxWidth: '55%','@media (max-width: 600px)': {maxWidth: '100%' } }}>
            <Box sx={{ p: 2 }}>
              <img
              src={Ruhuna1}
              alt="Ruhuna "
              style={{ width: '100%', minHeight: 'auto',height:"460px", objectFit: 'cover' }} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      </Grid>
    {/*--------------------------------------------Footer ---------------- -------------------------------------- */}
      <Footer />
    </>
  );
};

export default Story;
