import React from 'react';
import { createTheme, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import HeaderScreen, { ColorModeContext } from './screens/HeaderScreen';

import HomeScreen from './screens/HomeScreen'
import CoinScreen from './screens/CoinScreen';

function App() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,   
        }
      }),
    [mode],
  );
  return (
  <React.Fragment>
     <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12} margin="3px" component="header">
          <ColorModeContext.Provider value={colorMode}>
           <ThemeProvider theme={theme}>
            <HeaderScreen />
           </ThemeProvider>
          </ColorModeContext.Provider>  
        </Grid>
        <Grid item xs={12} margin="3px" component="body">    
        <Routes>
         <Route path="/" element={<HomeScreen />} /> 
          <Route path="coin/:id" element={< CoinScreen />}/>     
        </Routes>
       </Grid> 
      </Grid> 
   </React.Fragment>
  );
}

export default App;
