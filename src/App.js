import React from 'react';
import { Grid } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Headers from './screens/Header';
import ShowStats from './screens/ShowStats';
import CoinShow from './screens/CoinShow';


function App() {
  
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} margin="3px">
          <Headers />
        </Grid>
        <Grid item xs={12} margin="2px">
         <ShowStats />
        </Grid>   
        <Grid item xs={12} margin="3px">     
        <Routes>
         <Route path="/" element={<CoinShow />} />
        </Routes>
       </Grid> 
      </Grid> 
    </div>
  );
}

export default App;
