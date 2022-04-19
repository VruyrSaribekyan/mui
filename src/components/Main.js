import React from 'react'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
const useStyles = makeStyles((theme)=>({
    mainBox:{
        width:'100%',  
        height:'700px' ,
        backgroundColor:'#EEF2FF'
    },
    deliveryImg:{
        position:'absolute',
        padding:'213px 30px 0px 651px'
    },

    deliveryTextSpan:{
        color:'green', 
        fontSize:'60px'
    },
    aboutBox:{
        padding:'85px 28px 0px 30px'
    },
    aboutBoxText:{
        padding:'112px 72px',
        fontWeight:700, 
        color:'green', 
        fontSize:'50px',  
        fontFamily:'ubuntu'
    
    },
    aboutBoxImg:{
        padding:'85px 28px 0px 30px', 
        width:'95%'
    }
}))
export default function Main() {
    const classes =useStyles();
  return (
    <main>
        <Box  className={classes.mainBox}>             
         <img alt='delivery' className={classes.deliveryImg} 
         src='undraw_order_delivered_re_v4ab 1 (1).png'/>

            <Typography  style={{
                 fontSize:'60px',  
                 textAlign:'center', 
                 padding:'112px 765px 243px 30px', 
                 width:'400px', 
                 fontWeight:700, 
                 fontFamily:'ubuntu'
            }}>

            <span className={classes.deliveryTextSpan}>FAST</span> Delivery
                       Healthy food
                        Order now!
            </Typography>
           
        </Box>

        <Box className={classes.aboutBox} >       
                     <Typography variant="text" className={classes.aboutBoxText}> About  
                        <Typography variant="text" style={{ fontWeight:300, fontSize:'30px', color:'black'}}>site name</Typography>
                     </Typography>
<img alt='img' className={classes.aboutBoxImg} src='Group 13.png'/>
        </Box>
     </main>
  )
}
