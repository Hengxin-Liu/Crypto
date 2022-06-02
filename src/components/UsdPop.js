import { Box, ButtonBase, Grid, Popover, TextField, Typography} from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../utils/data';

export default function UsdPop(props) {
  const { ...other } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
   }; 
  const handleClose = () => {
    setAnchorEl(null);
   };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
    return (
     <Box {...other}>
       <ButtonBase 
        aria-describedby={id}
        onClick={handleClick}
        sx={{ border:'solid 2px gray', borderRadius:'40px',
          padding:'7px 12px', fontSize:'0.9rem' }}>
            USD
       </ButtonBase>
       <Popover  id={id}  open={open} anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
       }}>
         <div className="coinpop">
          <Grid container  rowSpacing={2}>
           <Grid item md={12}>
            <TextField size='small' id="search"  variant="outlined" placeholder='Search'/>
           </Grid>    
            <Grid item container rowSpacing={2}>
             {data.currency.map((x) => (
              <React.Fragment key={x.id}>
                <Grid item xs={12}  >
                 <Typography sx={{ fontSize: '16px' }} >{x.name}</Typography>
                </Grid>
                {x.coins.map((coin) => (
                  <Grid item md={4} xs={6}  key={coin.id}>
                     <Link  to={`/coins/${coin.id}`} className="coinpop" >
                       {coin.short} {coin.name}
                     </Link> 
                  </Grid>
                ))}  
              </React.Fragment>
             ))}
           </Grid>
          </Grid> 
        </div>        
      </Popover>
     </Box>
    );
}
