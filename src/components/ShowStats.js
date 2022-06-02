import React from 'react'
import { Box, Card, CardContent, FormControlLabel, FormGroup, Grid, Switch, Typography } from "@mui/material";
import { useState } from "react";
import NumberFormat from "react-number-format";
import data from "../utils/data";
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Show() {
    const [show, setShow] = useState(false);
    const handleChange = (event) => {
       setShow(event.target.checked);
     };
     return (
       <div>    
          <Grid container spacing={2}>
            <Grid item >
             <Typography sx={{ fontWeight:'bold',fontSize:'1.4rem'}}>Cryptocurrency Prices by Market Cap</Typography>
            </Grid>
            <Grid item >
             <FormGroup>
              <FormControlLabel 
               control={<Switch checked={show} onChange={handleChange}/> } 
               label="Show Stats" />
             </FormGroup>
            </Grid>
          </Grid>
        { show && (<div className="spacevertical">
         <Grid container spacing={2} >
          {data.cards.map((card) => (
            <Grid item lg={3} md={6} key={card.name}>
             <Card sx={{ width:'300px',height:'100px'}} className={card.status === 'down' ? "red" : card.status === 'up' ? "green" : "gray"} >
              <CardContent sx={{display:'flex'}}>
               <Box>
               {card.name === 'Bitcoin Market Cap Dominance' ? (         
                 <Typography fontSize='1.5rem' >
                   <NumberFormat value={(card.amount/100).toFixed(2)}  displayType={'text'} 
                    thousandSeparator={true}  />%
                 </Typography>            
               ) :  card.name === 'Total of Coins' ? (
                 <Typography  fontSize='1.5rem' >
                  <NumberFormat value={card.amount}  displayType={'text'} 
                    thousandSeparator={true}   />
                 </Typography>    
               ) :(
                 <Typography  fontSize='1.5rem' >
                  <NumberFormat  value={card.amount}  displayType={'text'} 
                    thousandSeparator={true}  prefix={'$'}/>
                 </Typography>            
              )}
                <Typography fontSize="1.1rem">{card.name}</Typography>
               </Box>
               <Box pl="10px">
                 { card.status==='up' ? (
                  < ArrowUpwardIcon sx={{ fontSize:'4rem', color:'green'}}/>
                 ) : card.status==='down' ? (
                  <ArrowDownwardTwoToneIcon sx={{ fontSize:'4rem', color:'red' }}/>
                 ) :(
                   <></>
                 )}
               </Box>
              </CardContent> 
             </Card>
            </Grid>
          ))}
         </Grid>
        </div>)}
         
       </div> 
     );
   }
   
   export default Show;