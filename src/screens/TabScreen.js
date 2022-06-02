import { Box, Tabs,Tab } from '@mui/material';
import React from 'react';
import AddCoin from '../components/AddCoin';
import TabPanel from '../components/TabPanel';
import CoinsScreen from './CoinsScreen';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabScreen(props) {
 const [value, setValue] = React.useState(0);
 const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
    <React.Fragment>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Coins" {...a11yProps(0)} />
            <Tab label="Add Coin " {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <CoinsScreen />
        </TabPanel>
        <TabPanel value={value} index={1}>
         <AddCoin />
        </TabPanel>
      </Box>
    </React.Fragment>
    );
}

export default TabScreen;