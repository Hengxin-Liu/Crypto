import {  Stack, Typography } from "@mui/material";
import Header from "./components/Header";
import Show from "./components/ShowStats";
import CoinShow from "./components/CoinShow";
import ScreenTab from "./components/ScreenTab";

function App() {
  
  return (
    <div>
      <Header/>
      <main className="main">
       <ScreenTab/>
        <Show /> 
       <CoinShow />
      </main>   
      <footer className="footer">
       <Typography>
         All rights reserved. Next Amazona.
       </Typography> 
       </footer>
    </div>
  );
}

export default App;
