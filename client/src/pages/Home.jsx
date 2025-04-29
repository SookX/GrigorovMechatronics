  import * as React from 'react';
  import { useContext } from "react";

  import Button from '@mui/material/Button';
  import { Container, Box } from '@mui/material';
  import Hero from '../components/Hero';
  import homeImg from "../assets/home.png"
  import "../style/home.css"
  import video from "../assets/gm.mp4"
  import {DataContext} from "../context/DataContext"
  import homePageData from "../text/homePage.json";


  function Home() {

    
    return (
      <div className='main' >
      <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(60%)',  // Darkens the video
              opacity: "100%",     
              transform: '',  
              zIndex: -1
            }}
          >
            
            <source src={video} type="video/mp4" />
            Sorry, your browser doesn’t support HTML5 video.
          </video>
        <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              width: "100%",
              textAlign: "center"
            }}
          >
            <Hero/>
          </Box>

      </div>
    );
  }

  export default Home;
