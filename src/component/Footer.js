import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="#d9d9d9" mt={1}>
      {'Copyright © '}
      <Link to="/" style={{textDecoration:"none", color:"inherit"}}>TEA CUPS PREMIUM&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box 
      sx={{
        width: '100%', 
        backgroundColor: '#294836',
        color: '#d9d9d9'
      }}
    >
      <Container 
        maxWidth={false} 
        disableGutters 
        sx={{ 
          width: '100%',
          px: { xs: 2, sm: 4 } 
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 2, sm: 4 },
            py: { xs: 2, sm: 3 },
            width: '100%'
          }}
        >
          {/* Top Section */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            {/* Company Info */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', sm: 'flex-start' },
                width: { xs: '100%', sm: 'auto' },
                marginBottom: { xs: 2, sm: 0 }
              }}
            >
              <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  width: '70px', 
                  height: '70px', 
                  backgroundColor: '#d9d9d9',
                  borderRadius: '50%', 
                  marginBottom: 2
                }}
              >
                <img
                  src={Logo}
                  style={{ width: '50px', height: '40px' }}
                  alt="TEA CUPS PREMIUM"
                />
              </Box>
              <Typography variant="body2" fontWeight={600} gutterBottom>
                TEA CUPS PREMIUM
              </Typography>
              <Typography 
                variant="body2" 
                color="#d9d9d9" 
                gutterBottom 
                sx={{fontStyle:"italic", textAlign: { xs: 'center', sm: 'left' }}}
              >
                Savor the Moment, Sip the Serenity.
              </Typography>
            </Box>

            {/* Quick Links */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', sm: 'flex-start' },
                gap: 4,
                width: { xs: '100%', sm: 'auto' }
              }}
            >
              {/* Quick Access Column */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: { xs: 'center', sm: 'flex-start' },
                  gap: 1,
                  marginRight:"30px"
                }}
              >
                <Typography variant="body2" fontWeight={600}>
                  Quick Access
                </Typography>
                <Link to="#" style={{ textDecoration: 'none', color: "inherit" }}>
                  Blogs
                </Link>
              </Box>

              {/* About Us Column */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: { xs: 'center', sm: 'flex-start' },
                  gap: 1,
                  marginRight:"30px"
                }}
              >
                <Typography variant="body2" fontWeight={600}>
                  About Us
                </Typography>
                <Link to="/ourstory" style={{ color: '#d9d9d9', textDecoration: "none" }}>
                  Our Story
                </Link>
              </Box>
            </Box>
          </Box>

          {/* Bottom Section */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              borderTop: '1px solid',
              borderColor: '#d9d9d9',
              pt: { xs: 2, sm: 3 }
            }}
          >
            {/* Legal Links */}
            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: { xs: 'center', sm: 'flex-start' },
                width: { xs: '100%', sm: 'auto' },
                marginBottom: { xs: 2, sm: 0 }
              }}
            >
              <Box>
                <Link 
                  to="#" 
                  style={{ 
                    textDecoration: "none", 
                    color: "#d9d9d9" 
                  }}
                >
                  Privacy Policy
                </Link>
                <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
                  &nbsp;•&nbsp;
                </Typography>
                <Link 
                  to="#" 
                  style={{ 
                    textDecoration: "none", 
                    color: "#d9d9d9" 
                  }}
                >
                  Terms of Service
                </Link>
                <Copyright />
              </Box>
            </Box>

            {/* Social Icons */}
            <Stack
              direction="row"
              justifyContent="center"
              spacing={1}
              sx={{
                color: '#d9d9d9',
                width: { xs: '100%', sm: 'auto' }
              }}
            >
              <IconButton
                color="inherit"
                href="#"
                aria-label="Facebook"
                sx={{ alignSelf: 'center' }}
              >
                <FacebookOutlinedIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="#"
                aria-label="X"
                sx={{ alignSelf: 'center' }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="#"
                aria-label="LinkedIn"
                sx={{ alignSelf: 'center' }}
              >
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;