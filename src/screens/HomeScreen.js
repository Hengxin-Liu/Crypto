import { Grid } from '@mui/material';
import React from 'react';

import ShowStats from '../components/ShowStats'
import TabScreen from './TabScreen';

function HomeScreen(props) {
    return (
      <React.Fragment>
        <Grid container spacing={2}>
          <Grid item xs={12} margin="2px" >
             <ShowStats />
          </Grid>   
          <Grid item xs={12}>
             <TabScreen />
          </Grid>
        </Grid>
     </React.Fragment> 
  );
}

export default HomeScreen;