import React from 'react'
import { Container, Box, Typography } from '@mui/material';

export default function Posts() {
  return (
    <div>
           <Container  style={{paddingTop:'117px' }}>
       <Typography style={{display:'inline', fontWeight:300, fontSize:'30px', color:'black'}}>
           <span style={{fontWeight:700, color:'green', fontSize:'50px',  fontFamily:'ubuntu'}}>Blog </span>  site name
       </Typography>
          <span style={{float:'right', paddingTop:'35px'}}>All posts</span>
       
   </Container>
   <Box  style={{ paddingTop:'20px', justifyContent:'space-around', display:'flex', flexDirection:'row'}}>
   <Box style={{ width:'425px', height:'487px'}}>
             <img src='Rectangle 5.png' alt='img' style={{width:'100%'}}/>
             <Typography style={{display:'flex', justifyContent:'space-between'}}>
             <Typography style={{padding:'13px', display:'inline-block',marginLeft:'10px'}}>
                 Title of blog post
                 
             </Typography>
             <Typography style={{float:'right', position:'relative', right:'20px', top:'12px'}}>
01/2/2022             </Typography>
             </Typography>
            <Container > <Typography style={{fontSize:"12px"}}>
             It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to 
             </Typography>
             </Container>
         </Box>
         <Box style={{width:'425px', height:'487px'}}>
             <img alt='img' src='Rectangle 5.png' style={{width:'100%'}}/>
             <Typography style={{display:'flex', justifyContent:'space-between'}}>
             <Typography style={{padding:'13px', display:'inline-block',marginLeft:'10px'}}>
                 Title of blog post
                 
             </Typography>
             <Typography style={{float:'right', position:'relative', right:'20px', top:'12px'}}>
01/2/2022             </Typography>
             </Typography>
            <Container > <Typography style={{fontSize:"12px"}}>
             It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to 
             </Typography>
             </Container>
         </Box>
         <Box style={{ width:'425px', height:'487px'}}>
             <img alt='img' src='Rectangle 5.png' style={{width:'100%'}}/>
             <Typography style={{display:'flex', justifyContent:'space-between'}}>
             <Typography style={{padding:'13px', display:'inline-block',marginLeft:'10px'}}>
                 Title of blog post
                 
             </Typography>
             <Typography style={{float:'right', position:'relative', right:'20px', top:'12px'}}>
01/2/2022             </Typography>
             </Typography>
            <Container > <Typography style={{fontSize:"12px"}}>
             It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to 
             </Typography>
             </Container>
         </Box>

   </Box>
    </div>
  )
}
