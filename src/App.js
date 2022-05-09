import React from 'react';
import { createTheme, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Header, { ColorModeContext } from './screens/Header';
import ShowStats from './screens/ShowStats';
import CoinShow from './screens/CoinShow';
import Dom from './screens/Dom';


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
        },
      }),
    [mode],
  );
  return (
    <div>
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
     <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12} margin="3px" component="header">
          <Header />
        </Grid>
        <Grid item xs={12} margin="2px" component="nav">
         <ShowStats />
        </Grid>   
        <Grid item xs={12} margin="3px" component="body">     
        <Routes>
         <Route path="/" element={<CoinShow />} />
         <Route path="/coins" element={<Dom />} />
        </Routes>
       </Grid> 
      </Grid> 
    </ThemeProvider>
    </ColorModeContext.Provider>
    </div>
  );
}

export default App;
