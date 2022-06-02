import { Box, Grid,LinearProgress,Stack,Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { useParams } from 'react-router-dom';

function CoinScreen(props) {
  const [coin, setCoin] = useState({});
  const params = useParams();
   useEffect( () => { 
     getCoin(params.id);
   },[params.id])
async function getCoin(id) {  
   try{
     const response = await axios.get(`http://localhost:5000/coins/${id}`);
     setCoin(response.data);
     console.log(response)
   }catch(error){
    console.error(error);
   }
}
    return (
      <div>
        <Grid container spacing={2} >
          <Grid item xs={12} >
            <Typography variant="h6">{coin.name}</Typography>
            <Typography variant='h4'> 
              <NumberFormat  value={coin.price} displayType={'text'} 
                  thousandSeparator={true}  prefix={'$'}/> 
            </Typography>
          </Grid>
          <Grid xs={12} m={2}>
            <Box width={{md:"58vh"}}>
             <LinearProgress variant="determinate" value={30} color="warning" 
              sx={{ borderRadius:"20px",height:"2vh",backgroundColor:"gray",}} /> 
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
              <Typography> 
                <NumberFormat  value="29441.29" displayType={'text'} className="moveright"
                  thousandSeparator={true}  prefix={'$'}/> 
              </Typography> 
              <Typography> 
                <NumberFormat  value="31877.49" displayType={'text'} className="moveright"
                  thousandSeparator={true}  prefix={'$'}/>
              </Typography>
            </Stack>
           </Box>
          </Grid>
          <Grid item container>
           <Box sx={{ width:{md:"120vh"} }}>
            <Grid item container rowSpacing={2}  columnSpacing={{ md:3 }}  
               sx={{ "& p": {color:'gray', borderBottom:"1px solid gray", fontSize:"medium", paddingBottom:"1.2vh 0"}}}>
              <Grid item md={6} xs={12}> 
                <Typography component="p" fontSize="2vh">Market Cap: 
                 <NumberFormat  value={coin.mkt_cap} displayType={'text'} className="moveright"
                  thousandSeparator={true}  prefix={'$'}/> 
                </Typography>
              </Grid> 
              <Grid item md={6} xs={12}> 
                <Typography component="p" >Circulating Supply: 
                 <NumberFormat  value="2343244" displayType={'text'} className="moveright"
                  thousandSeparator={true}  /> 
                </Typography>
              </Grid> 
              <Grid item md={6} xs={12}> 
               <Typography component="p">24 Hour Trading Vol:
                 <NumberFormat  value={coin.onedayVolume} displayType={'text'} className="moveright"
                 thousandSeparator={true}  prefix={'$'}/> </Typography>
              </Grid> 
              <Grid item md={6} xs={12}> 
               <Typography component="p">Total Supply:
                 <NumberFormat  value="21000000" displayType={'text'} className="moveright"
                 thousandSeparator={true}  /> </Typography>
              </Grid> 
            </Grid>
           </Box>
          </Grid>
        </Grid>   
      </div>
    );
}

export default CoinScreen;