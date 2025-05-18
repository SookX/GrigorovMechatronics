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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2922.315526146254!2d23.84142387597798!3d42.9083861002842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa50965a3a742b%3A0x8bddf12c3a12a743!2sGRIGOROV%20MECHATRONICS%20BASE%202!5e0!3m2!1sen!2sbg!4v1747476319789!5m2!1sen!2sbg"
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
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <PhoneIcon color="primary" sx={{ mr: 1, fontSize: 28 }} />
                <Typography variant="body1" sx={{ color: "#555" }}>
                  <Link
                    href="tel:+0878506620"
                    underline="none"
                    sx={{ color: "inherit" }}
                  >
                    0878506620
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
