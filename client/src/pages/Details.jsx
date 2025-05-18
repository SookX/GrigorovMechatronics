import React, { useEffect, useState, useContext } from "react";
import { Container, Typography, Box } from "@mui/material";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { DataContext } from "../context/DataContext";

const Details = () => {
  const { language } = useContext(DataContext);

  const [validImages, setValidImages] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const startNum = 1000063799;
  const endNum = 1000063858;

  useEffect(() => {
    let isMounted = true;

    const checkImage = (src) =>
      new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(src); // return src if successful
        img.onerror = () => resolve(null); // null if not found
      });

    async function validateImages() {
      const imageNumbers = Array.from(
        { length: endNum - startNum + 1 },
        (_, i) => startNum + i
      );

      const imagePaths = imageNumbers.map((num) => `/media/details/${num}.jpg`);
      const results = await Promise.all(imagePaths.map(checkImage));

      const foundImages = results.filter(Boolean); // remove nulls

      if (isMounted) setValidImages(foundImages);
    }

    validateImages();

    return () => {
      isMounted = false;
    };
  }, []);

  const slides = validImages.map((src) => ({ src }));

  return (
    <Container maxWidth="md" sx={{ py: 6, paddingTop: 20 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h3"
          sx={{
            display: "inline-block",
            position: "relative",
            color: "primary.main",
            fontWeight: 700,
            paddingBottom: 2,
            "&::after": {
              content: '""',
              position: "absolute",
              width: "60%",
              height: 4,
              backgroundColor: "primary.main",
              bottom: -6,
              left: "20%",
              borderRadius: 2,
            },
          }}
        >
          {language.code === "bg" ? "Детайли" : "Details"}
        </Typography>
      </Box>

      {validImages.length > 0 ? (
        <>
          <Box
            onClick={() => setLightboxOpen(true)}
            sx={{
              width: "100%",
              height: 400,
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 4,
              cursor: "pointer",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.01)" },
            }}
          >
            <Box
              component="img"
              src={validImages[0]}
              alt="Gallery preview"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>

          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            slides={slides}
            carousel={{ finite: false }}
          />
        </>
      ) : (
        <Typography>
  {language.code === "bg" ? "Снимките зареждат..." : "Loading images..."}
</Typography>
      )}
    </Container>
  );
};

export default Details;
