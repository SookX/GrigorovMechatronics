import * as React from 'react';
import Button from '@mui/material/Button';
import { Container, Box } from '@mui/material';
import Grid from "@mui/material/Grid2"
import Hero from '../components/Hero';
import homeImg from "../assets/home.png"
import "../style/home.css"


function Home() {
  return (
    <div className='main'>
    <Grid container spacing={2} className="text">
      <Grid item size={{ xs: 12, sm: 12, md: 6}}> 
        <Box
          sx={{
            border: "0px solid",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            paddingLeft: { xs: "0px", md: "50px" }

          }}
        >
          <Hero />
        </Box>
      </Grid>
      <Grid item size={{ xs: 12, sm: 12, md: 6 }}> 
        <Box sx={{
            border: "0px solid",
            display: {xs: "None", md: "flex",},
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}>
          <img src={homeImg} height={350} alt="" />
        </Box>
      </Grid>
    </Grid>
    </div>
  );
}

export default Home;
