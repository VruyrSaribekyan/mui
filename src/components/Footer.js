
import React from 'react'
import { Typography, Grid, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';   
 const useStyles = makeStyles((theme)=>({
   aboutText:{
    padding:'132px 72px',  
    ontWeight:700, 
    display:'inline', 
    color:'green', 
    fontSize:'50px',  
    fontFamily:'ubuntu'
   },
   gridContainer:{
    padding:'38px 307px 167px 307px',
    justifyContent:'center'
   },
   gridItems:{
       textAlign:'center'
   },
   gridItemsText:{
       color:'green'
   },
   footerBox:{
    backgroundColor:'#EEF2FF', 
    padding:'49px 1035px 49px 53px'
   },
   aboutTextSpan:{
    fontWeight:300, 
    fontSize:'30px', 
    color:'black'
   }
    }))
export default function Footer() {
const classes = useStyles();
  return (
      
    <div style={{width:'100%'}}>
          <Typography variant="text" className={classes.aboutText} >
              About  
              <Typography variant="text" className={classes.aboutTextSpan}> site name</Typography>
          </Typography>

<Grid className={classes.gridContainer} container spacing={12}>

<Grid item  className={classes.gridItems}>
  <img alt='addres' src='addres.png'/>
  <Typography >
      Our addres
      <Typography className={classes.gridItemsText}>
          Gyumri, Armenia
      </Typography>
  </Typography>
   </Grid>
<Grid item className={classes.gridItems}>
<img alt='heraxos' src='heraxos.png'/>
<Typography>
      Our phone
  </Typography>
 
  <Typography className={classes.gridItemsText}>
      +7 874 161 615
  </Typography>

</Grid>
<Grid item className={classes.gridItems}>
<img alt='sms' src='sms.png'/>
<Typography>
      e-mail
  </Typography>
  <Typography className={classes.gridItemsText}>
      gyumri@gmail.com
  </Typography>
</Grid>
</Grid>
<Box className={classes.footerBox}>
<Typography>
Copyright 2022. All rights reserved.
</Typography>
</Box>

    </div>
  )
}
