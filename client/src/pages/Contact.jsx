import { useContext } from "react";
import { Container, Typography, Box, Card, CardContent, Link, Grid } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { DataContext } from "../context/DataContext"; // <-- за езика
import contactPageData from "../text/contactPage.json"; // <-- за текстовете

const Contact = () => {
  const { language } = useContext(DataContext);
  const data = contactPageData[language.code]; // Зареждаме правилния език
  
  return (
    <Box
      sx={{
        pt: "500px", // Padding за навигацията
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
          {data.title}
        </Typography>

        <Grid container spacing={4} alignItems="center">
          {/* Ляво - Google Map */}
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2922.088327616797!2d23.848085204407816!3d42.91317811376694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa5094cdcb73e1%3A0x550d6bb9f8d91103!2s3%2076%2C%202160%20Trudovets%2C%20Bulgaria!5e0!3m2!1sen!2sit!4v1745472413368!5m2!1sen!2sit"
                ></iframe>
              </CardContent>
            </Card>
          </Grid>

          {/* Дясно - Контактна информация */}
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 4, boxShadow: 5, borderRadius: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                {data.secondaryTitle}
              </Typography>

              {/* Адрес */}
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LocationOnIcon color="primary" sx={{ mr: 1, fontSize: 28 }} />
                <Typography variant="body1" sx={{ color: "#555" }}>
                  {data.address}
                </Typography>
              </Box>

              {/* Телефон */}
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <PhoneIcon color="primary" sx={{ mr: 1, fontSize: 28 }} />
                <Typography variant="body1" sx={{ color: "#555" }}>
                  <Link
                    href="tel:+0889397324"
                    underline="none"
                    sx={{ color: "inherit" }}
                  >
                    0889397324
                  </Link>
                </Typography>
              </Box>

              {/* Имейл */}
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <EmailIcon color="primary" sx={{ mr: 1, fontSize: 28 }} />
                <Typography variant="body1" sx={{ color: "#555" }}>
                  <Link
                    href="mailto:gmechatronics.front@gmail.com"
                    underline="none"
                    sx={{ color: "inherit" }}
                  >
                    gmechatronics.front@gmail.com
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
