import { Box, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';

export default function ScreenTab(props) {

  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
  
   <Box sx={{ width: '100%', typography: 'body1' , borderBottom:'solid gray',margin:'20px 0'}}>
    <Tabs
        value={value}
        onChange={handleChange}
        aria-label="navigation"
        textColor="black"
        TabIndicatorProps={{
          style: {
            backgroundColor: "green"
           }
          }}
      >
        <Tab value="one" label="Coins" />      
        <Tab value="two" label="Recently Added" />
        <Tab value="three" label="Category" />
      </Tabs>
   </Box>
  );
}

