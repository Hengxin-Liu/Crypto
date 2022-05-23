import { Box, ButtonBase, Grid, Link, Popover, Stack, TextField, Typography} from '@mui/material';
import React, { useState } from 'react';
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
         <div className='coinp'>
          <Grid container  rowSpacing={2}>
           <Grid item md={12}>
            <TextField size='small' id="search"  variant="outlined" placeholder='Search'/>
           </Grid>
           <Grid item >
            <Grid container rowSpacing={3}>
             {data.currency.map((x) => (
              <>
                <Grid item xs={12}>
                 <Typography sx={{ fontSize: '16px' }}>{x.name}</Typography>
                </Grid>
                {x.coins.map((coin) => (
                  <Grid item md={4} xs={6}>
                   <Stack >
                     <Link  href={`/coins/${coin.name}`} underline="none" color='black' 
                     sx={{fontSize:'13px' }}>{coin.short} {coin.name}</Link> 
                    </Stack>  
                  </Grid>
                ))}  
              </>
             ))}
            </Grid>
           </Grid>
          </Grid> 
        </div>        
      </Popover>
     </Box>
    );
}
