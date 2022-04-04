import { Card, CardContent, FormControlLabel, FormGroup, Grid, Stack, Switch, Typography } from "@mui/material";
import { useState } from "react";
import NumberFormat from "react-number-format";
import data from "../utils/data";

function Show() {
    const [show, setShow] = useState(false);
    const handleChange = (event) => {
       setShow(event.target.checked);
     };
   
     return (
       <div>
        <Stack direction="row" spacing={2} alignItems="center">
          <Grid container spacing={2}>
            <Grid item md={4}>
             <Typography sx={{ fontWeight:'bold',fontSize:'1.4rem'}}>Cryptocurrency Prices by Market Cap</Typography>
            </Grid>
            <Grid item md={8}>
             <FormGroup>
              <FormControlLabel 
               control={
                <Switch
                 checked={show}
                 onChange={handleChange}/> } label="Show Stats" />
             </FormGroup>
            </Grid>
          </Grid>
        </Stack>
        { show && (<div className="spacevertical">
         <Grid container spacing={2} >
          {data.cards.map((card) => (
            <Grid item md={3}>
             <Card sx={{ width:'290px',height:'100px'}} className={card.status === 'down' ? "red" : card.status === 'up' ? "green" : "gray"}>
              <CardContent>
              {card.name === 'Bitcoin Market Cap Dominance' ? (
                 <Typography sx={{ fontSize: '1.5rem' }}>
                   <NumberFormat
                   value={(card.amount/100).toFixed(2)} 
                   displayType={'text'} 
                   thousandSeparator={true} 
                   prefix={'$'}/>%
                 </Typography>
              ) : (
             <Typography sx={{ fontSize: '1.5rem' }}>
               <NumberFormat
                value={card.amount} 
                displayType={'text'} 
                thousandSeparator={true} 
                prefix={'$'}/>
                </Typography>
                )}
              <Typography>{card.name}</Typography>
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