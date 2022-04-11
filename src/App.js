import React from 'react';
import { Grid } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Headers from "./components/Headers";
import CoinShow from "./components/CoinShow";
import ScreenTab from "./components/ScreenTab";
import ShowStats from "./components/ShowStats";


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
