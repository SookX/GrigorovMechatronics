import { Container, Typography, Box, Grid } from "@mui/material";
import { useContext } from "react";
import { DataContext } from '../context/DataContext';
import aboutPageData from "../text/aboutPage.json"; // Make sure path is correct

const About = () => {
  const { language } = useContext(DataContext);
  const data = aboutPageData[language.code]; // Get the right language (en or bg)

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 2rem",
        paddingTop: "10rem"
      }}
    >
      {/* OUR MISSION SECTION */}
      <Container maxWidth="md" sx={{ textAlign: "center", marginBottom: "3rem" }}>
        <Typography variant="body1" sx={{ marginBottom: "0.8rem", fontWeight: "bold", textTransform: "uppercase", fontSize: "0.9rem" }}>
          {data.missionTitle}
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: "1rem", fontWeight: "bold" }}>
          {data.missionSecondaryTitle}
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          {data.missionText}
        </Typography>
      </Container>

      {/* OUR EXPERTISE SECTION */}
      <Container maxWidth="lg" sx={{ marginBottom: "4rem" }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Column - Text */}
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ fontWeight: "bold", textTransform: "uppercase", fontSize: "0.9rem" }}>
              {data.expertiseTitle}
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold", margin: "1rem 0" }}>
              {data.expertiseHeadline}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", marginBottom: "1rem" }}>
              {data.expertiseText}
            </Typography>
          </Grid>

          {/* Right Column - Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src='/media/aboutPage/image4.jpeg'
              alt="Automated Production Line"
              sx={{
                width: "100%",
                borderRadius: "16px",
                boxShadow: 3
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* OUR TECHNOLOGY SECTION */}
      <Container maxWidth="lg" sx={{ marginBottom: "4rem" }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Column - Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src='/media/aboutPage/image6.jpeg'
              alt="Our Technology"
              sx={{
                width: {xs: "100%", md: "80%"},
                borderRadius: "16px",
                boxShadow: 3
              }}
            />
          </Grid>

          {/* Right Column - Text */}
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ fontWeight: "bold", textTransform: "uppercase", fontSize: "0.9rem" }}>
              {data.technologyTitle}
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold", margin: "1rem 0" }}>
              {data.technologyHeadline}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", marginBottom: "1rem" }}>
              {data.technologyText}
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* OUR TEAM SECTION */}
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Column - Text */}
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ fontWeight: "bold", textTransform: "uppercase", fontSize: "0.9rem" }}>
              {data.teamTitle}
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold", margin: "1rem 0" }}>
              {data.teamHeadline}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", marginBottom: "1rem" }}>
              {data.teamText}
            </Typography>
          </Grid>

          {/* Right Column - Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src='/media/aboutPage/image9.jpeg'
              alt="Our Team"
              sx={{
                width: "100%",
                borderRadius: "16px",
                boxShadow: 3
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
