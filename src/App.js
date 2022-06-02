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
  <div>   
      <Grid container spacing={2}>
       <CssBaseline />
        <Grid item xs={12}  component="header">
          <ColorModeContext.Provider value={colorMode}>
           <ThemeProvider theme={theme}>
            <HeaderScreen />
           </ThemeProvider>
          </ColorModeContext.Provider>  
        </Grid>
        <Grid item xs={12} mx={2}>    
        <Routes>
         <Route path="/" element={<HomeScreen />} /> 
         <Route path="coin/:id" element={< CoinScreen />}/>     
        </Routes>
       </Grid> 
      </Grid> 
   </div>
  );
}

export default App;
