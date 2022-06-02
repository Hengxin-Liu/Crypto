import React, { useEffect, useState } from "react";
import { Alert, Box, CircularProgress, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import NumberFormat from "react-number-format";
import UsdPop from "../components/UsdPop";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import Popup from "../components/Popup";
import AddCoin from "../components/AddCoin";
import axios from "axios";

export default function CoinsScreen() {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [open,setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
 async function getData() { 
     await axios.get(" http://localhost:5000/coins")
      .then( res => {
        setData(res.data)
     })
     .catch(error => {
       setError(error);
     })
    .finally( () => {
      setLoading(false);
    })
}
  useEffect( ()=> {
      getData();
},[]);
  return (  
 <React.Fragment>
   <Box>
     <Grid  container direction="row" justifyContent="space-between" alignItems="center"> 
      <UsdPop mb={2} /> 
      <IconButton aria-label="add" onClick={() => setOpen(true) }>
       <AddIcon />
      </IconButton> 
      <Popup open={open} onClose={handleClose} >
          <AddCoin />
        </Popup>
     </Grid>
    { error ? <Alert severity="error"> Content couldn't find</Alert> 
    : loading ? <CircularProgress color="success" />
    :
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow sx={{ '&:last-child th': { fontWeight : 'bold' } }} >
            <TableCell >#</TableCell>
            <TableCell >Coin</TableCell>
            <TableCell align="center" >Price</TableCell>
            <TableCell align="center" >1h</TableCell>
            <TableCell align="center" >24h</TableCell>
            <TableCell align="center" >7d</TableCell>
            <TableCell align="center" >24h Volume</TableCell>
            <TableCell align="center" >Mkt Cap</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((coin) => (
            <TableRow
              key={coin.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className="star" >            
                  {coin.id}
              </TableCell>
              <TableCell>
                <Link to={`/coin/${coin.id}`} className="coinclolor">{coin.name}</Link>
              </TableCell>
              <TableCell align="center">
                <NumberFormat  value={coin.price} displayType={'text'} 
                 thousandSeparator={true}  prefix={'$'}/>
              </TableCell>
              <TableCell align="center">{Number(coin.onehour/100).toFixed(2)}%</TableCell>
              <TableCell align="center">{Number(coin.oneday/100).toFixed(2)}%</TableCell>
              <TableCell align="center">{Number(coin.sevendays/100).toFixed(2)}%</TableCell>
              <TableCell align="center">
               <NumberFormat  value={Number(coin.onedayVolume)} displayType={'text'} 
                 thousandSeparator={true}  prefix={'$'}/>
              </TableCell>
              <TableCell align="center">
               <NumberFormat  value={Number(coin.mkt_cap)} displayType={'text'} 
                 thousandSeparator={true}  />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    }
  </Box>
</React.Fragment> 
  );
}