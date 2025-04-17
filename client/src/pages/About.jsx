import { Container, Typography, Box, Link, Grid } from "@mui/material";

// Image URL - Replace with actual source
const imageUrl = "https://plus.unsplash.com/premium_photo-1663051303500-c85bef3f05f6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlJTIwdGFsa2luZ3xlbnwwfHwwfHx8MA%3D%3D"; 

const About = () => {
  return (
    <Box 
      sx={{ 
        display: "flex", 
        flexDirection: "column",
        alignItems: "center", 
        justifyContent: "center", 
        padding: "4rem 2rem",
        paddingTop: "14rem"
      }}
    >
      {/* OUR MISSION SECTION */}
      <Container maxWidth="md" sx={{ textAlign: "center", marginBottom: "4rem" }}>
        <Typography variant="body1" sx={{ marginBottom: "1rem", fontWeight: "bold" }}>
          OUR MISSION
        </Typography>
        <Typography variant="h4" sx={{ marginBottom: "1rem", fontWeight: "bold" }}>
          Making commerce better for everyone
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          We help people achieve independence by making it easier to start, run, and grow a business. 
          We believe the future of commerce has more voices, not fewer, so we’re reducing the barriers 
          to business ownership to make commerce better for everyone.
        </Typography>
      </Container>

      {/* SOCIAL IMPACT SECTION */}
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Column - Text */}
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ fontWeight: "bold", textTransform: "uppercase", fontSize: "0.9rem" }}>
              OUR TEAM AND OUR SOCIAL IMPACT
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold", margin: "1rem 0" }}>
              Creating a community for impact
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", marginBottom: "1rem" }}>
              Shopify has grown from 5 people in a coffee shop to over 10,000 across the globe. With millions of businesses powered by Shopify, we invest in our people and our communities.
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Our <Link href="#" sx={{ fontWeight: "bold", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>Social Impact initiatives</Link> focus on enabling an equitable future by building products and programs to support our team and merchants.
            </Typography>
          </Grid>

          {/* Right Column - Image */}
          <Grid item xs={12} md={6}>
            <Box 
              component="img"
              src={imageUrl}
              alt="Community Impact"
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
