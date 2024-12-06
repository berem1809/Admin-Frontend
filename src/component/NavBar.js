import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate(); 

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/story');
        break;
      case 2:
        navigate('/tea');
        break;
      case 3:
        navigate('/trade');
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper'}}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Home" sx={{fontFamily:"Poppin",fontWeight:"600"}}/>
        <Tab label="Story of Ceylon" sx={{fontFamily:"Poppin",fontWeight:"600"}}/>
        <Tab label="Tea" sx={{fontFamily:"Poppin",fontWeight:"600"}} />
        <Tab label="Trade" sx={{fontFamily:"Poppin",fontWeight:"600"}}/>
      </Tabs>
    </Box>
  );
}
