import React from "react"
import { Box, Typography } from "@mui/material";
import { FcCallback } from "react-icons/fc";
import { FcFeedback } from "react-icons/fc";
import './Header.scss'

const App = (()=>{
  return (
    <Box sx={{display:"flex", justifyContent:"flex-end"}} >
      <Typography  variant='h6' sx={{mr: "20px"}}  className="box">
      <FcCallback style={{fontSize:"22px", marginRight:"10px"}} />+022 2888 2278  
      </Typography> 
      <div style={{height:"20px",width:"2px", backgroundColor:"gray", marginTop:"6px"}}></div>
      <Typography variant='h6' sx={{p:"0px 30px"}} className="box">
      <FcFeedback style={{fontSize:"22px", marginRight:"10px"}} /> aditi123@gmail.com
      </Typography>
    </Box>
  )
});

export default App;