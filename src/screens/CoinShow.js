import React from "react";
import data from "../utils/data.js";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import NumberFormat from "react-number-format";
import UsdPop from "./UsdPop";

export default function CoinShow() {
  
  return (  
   <Box>
    <UsdPop />
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow sx={{ '&:last-child th': { fontWeight : 'bold' } }} >
            <TableCell >#</TableCell>
            <TableCell >Coin</TableCell>
            <TableCell align="right" >Price</TableCell>
            <TableCell align="right" >1h</TableCell>
            <TableCell align="right" >24h</TableCell>
            <TableCell align="right" >7d</TableCell>
            <TableCell align="right" >24h Volume</TableCell>
            <TableCell align="right" >Mkt Cap</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.coins.map((coin) => (
            <TableRow
              key={coin.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className="star" >            
              {coin.id}
              </TableCell>
              <TableCell>{coin.name}</TableCell>
              <TableCell align="right">
                <NumberFormat  value={coin.price} displayType={'text'} 
                 thousandSeparator={true}  prefix={'$'}/>
              </TableCell>
              <TableCell align="right">{(coin.onehour/100).toFixed(1)}%</TableCell>
              <TableCell align="right">{(coin.oneday/100).toFixed(1)}%</TableCell>
              <TableCell align="right">{(coin.sevendays/100).toFixed(1)}%</TableCell>
              <TableCell align="right">
               <NumberFormat  value={coin.onedayVolume} displayType={'text'} 
                 thousandSeparator={true}  prefix={'$'}/>
              </TableCell>
              <TableCell align="right">
               <NumberFormat  value={coin.mkt_cap} displayType={'text'} 
                 thousandSeparator={true}  />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
  );
}