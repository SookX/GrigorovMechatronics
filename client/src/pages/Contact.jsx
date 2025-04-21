import { Container, Typography, Box, Card, CardContent, Link, Grid } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  return (
    <Box
      sx={{
        pt: "500px", // Additional top padding for the nav bar
        display: "flex",
        justifyContent: "center",
        py: 8,
        px: 2,
        paddingTop: 20
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            textAlign: "center",
            color: "#333",
            mb: 4
          }}
        >
          Get in Touch
        </Typography>

        <Grid container spacing={4} alignItems="center">
          {/* Left Side - Google Map */}
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: 5, borderRadius: 3 }}>
              <CardContent sx={{ p: 0 }}>
                <iframe
                  title="Our Location"
                  width="100%"
                  height="350"
                  style={{ border: 0, borderRadius: "inherit" }}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDMohNJ-eq02WdfyHz59lnVCG9kV5oqyWo&q=New+York"
                ></iframe>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ p: 4, boxShadow: 5, borderRadius: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                Contact Information
              </Typography>

              {/* Address */}
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LocationOnIcon color="primary" sx={{ mr: 1, fontSize: 28 }} />
                <Typography variant="body1" sx={{ color: "#555" }}>
                  123 Main Street, New York, NY 10001
                </Typography>
              </Box>

              {/* Phone */}
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <PhoneIcon color="primary" sx={{ mr: 1, fontSize: 28 }} />
                <Typography variant="body1" sx={{ color: "#555" }}>
                  <Link
                    href="tel:+1234567890"
                    underline="none"
                    sx={{ color: "inherit" }}
                  >
                    +1 234 567 890
                  </Link>
                </Typography>
              </Box>

              {/* Email */}
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <EmailIcon color="primary" sx={{ mr: 1, fontSize: 28 }} />
                <Typography variant="body1" sx={{ color: "#555" }}>
                  <Link
                    href="mailto:contact@company.com"
                    underline="none"
                    sx={{ color: "inherit" }}
                  >
                    contact@company.com
                  </Link>
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
