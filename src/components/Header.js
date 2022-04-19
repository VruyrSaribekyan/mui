
import React from "react";
import Grid from '@mui/material/Grid'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
const useStyles = makeStyles((theme)=>({
    menuContainer:{
        justifyContent:'space-around',
        flexDirection:'row',
        display:'flex',
    alignItems:'center'
},
menuItems:{
    display:'flex',
    gap:'15px',
    alignItems:'center'
}
       
}))

export default function Header(){
const classes= useStyles();
console.log(classes.menuContainer);
    return(

        <header>

            <Box  className={classes.menuContainer} >
              <img src='logoo.png' alt=""/>
                 <Grid className={classes.menuItems} >
                      <ul>Home</ul>
                      <ul>About</ul>
                      <ul>Blog</ul>
                      <ul>Contact</ul>                           
                 </Grid>
               <div >
               <Button style={{textTransform: 'none'}} size="medium"><span style={{color:'black', fontWeight:'bold', marginRight:'10px'}} >Login</span></Button>
                   <Button variant='contained' color="success" style={{padding:'11px 33px 10px 33px', borderRadius:'11px'}}>register</Button>
               </div>
            </Box>
            
            
        </header>


    )


}