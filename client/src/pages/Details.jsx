import React, { useContext, useState } from "react";
import {
  Container,
  Typography,
  useMediaQuery,
  useTheme,
  Grid,
  Box,
} from "@mui/material";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { DataContext } from "../context/DataContext";

const Details = () => {
  const { language } = useContext(DataContext);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const cols = isXs ? 1 : isSm ? 2 : 3;

  const details = [
    {
      images: [
        "https://picsum.photos/id/1011/800/600",
        "https://picsum.photos/id/1012/800/600",
        "https://picsum.photos/id/1013/800/600",
      ],
    },
    {
      images: [
        "https://picsum.photos/id/1021/800/600",
        "https://picsum.photos/id/1022/800/600",
      ],
    },
    {
      images: [
        "https://picsum.photos/id/1031/800/600",
        "https://picsum.photos/id/1032/800/600",
        "https://picsum.photos/id/1033/800/600",
      ],
    },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [slides, setSlides] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const handleOpenLightbox = (images) => {
    const imageSlides = images.map((src) => ({ src }));
    setSlides(imageSlides);
    setStartIndex(0);
    setLightboxOpen(true);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6, paddingTop: 20 }}>
      {/* Title with underline */}
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{
          paddingBottom: 2,
          position: "relative",
          display: "inline-block",
          "&::after": {
            content: '""',
            position: "absolute",
            width: "50%",
            height: 3,
            backgroundColor: "primary.main",
            bottom: 0,
            left: "25%",
            borderRadius: 2,
          },
        }}
      >
        {language.code === "bg" ? "Детайли" : "Details"}
      </Typography>

      <Grid container spacing={3}>
        {details.map((detail, idx) => (
          <Grid
            item
            key={idx}
            xs={12}
            sm={6}
            md={4}
            onClick={() => handleOpenLightbox(detail.images)}
            sx={{
              cursor: "pointer",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.02)" },
              position: "relative",
              aspectRatio: "1 / 1",
            }}
          >
            <Box
              component="img"
              src={detail.images[0]}
              alt=""
              loading="lazy"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 2,
              }}
            />
          </Grid>
        ))}
      </Grid>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={startIndex}
        on={{ view: ({ index }) => setStartIndex(index) }}
        carousel={{ finite: true }}
      />
    </Container>
  );
};

export default Details;
