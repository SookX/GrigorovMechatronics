import React, { useState, useContext } from "react";
import { DataContext } from "../context/DataContext";
import {
  Container,
  Typography,
  Box,
  ImageList,
  ImageListItem,
  Button,
  Divider,
  Stack,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import VideocamIcon from "@mui/icons-material/Videocam";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

// srcset helper for images
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Automotive = ({ info }) => {
  const { language } = useContext(DataContext);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const cols = isXs ? 2 : isSm ? 3 : 4;
  const rowHeight = isXs ? 100 : 140;

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const content = info[language.code];

  const media = [
    ...(info.media?.images || []).map((src) => ({
      type: "image",
      src: `/media${src}.jpeg`,
      title: "Image",
    })),
    ...(info.media?.videos || []).map((src) => ({
      type: "video",
      src: `/media${src}`,
      title: "Video",
    })),
  ];

  const slides = media.map((item) =>
    item.type === "image"
      ? { type: "image", src: item.src, alt: item.title }
      : {
          type: "video",
          width: rowHeight * 5,
          height: rowHeight * 5,
          poster: `${item.src}?w=${rowHeight * 5}&h=${rowHeight * 5}&fit=crop`,
          sources: [{ src: item.src, type: "video/mp4" }],
        }
  );

  const openLightbox = (idx) => {
    setIndex(idx);
    setOpen(true);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4, pt: 4 }}>
      <Stack spacing={4}>
        {/* Header and Text */}
        <Box>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {content.title}
          </Typography>
          <Box sx={{ pt: 6 }}>
            {(content.paragraphs || []).map((text, idx) => (
              <Typography
                key={idx}
                variant="body1"
                color="text.secondary"
                sx={{ fontSize: "1.2rem", lineHeight: 1.6, mb: 2 }}
              >
                {text}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Media Section - Only if media exists */}
        {media.length > 0 && (
          <>
            <Divider />

            <Stack direction="row" alignItems="center" spacing={1}>
              <PhotoLibraryIcon color="primary" />
              <Typography variant="h5">
                {language.code === "bg" ? "Галерия" : "Media Gallery"}
              </Typography>
            </Stack>

            <Paper elevation={3} sx={{ borderRadius: 2, p: 1 }}>
              <ImageList
                variant="quilted"
                cols={cols}
                rowHeight={rowHeight}
                gap={6}
                sx={{ overflow: "hidden" }}
              >
                {media.map((item, idx) => (
                  <ImageListItem
                    key={`${item.type}-${idx}`}
                    cols={item.cols || 1}
                    rows={item.rows || 1}
                    sx={{
                      cursor: "pointer",
                      position: "relative",
                      borderRadius: 1,
                      overflow: "hidden",
                      transition: "transform .2s",
                      "&:hover": { transform: "scale(1.04)" },
                    }}
                    onClick={() => openLightbox(idx)}
                  >
                    {item.type === "video" ? (
                      <Box sx={{ position: "relative" }}>
                        <video
                          src={item.src}
                          poster={`${item.src}?w=${rowHeight}&h=${rowHeight}&fit=crop`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          muted
                          preload="metadata"
                        />
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            color: "rgba(255,255,255,0.9)",
                          }}
                        >
                          <VideocamIcon sx={{ fontSize: 48 }} />
                        </Box>
                      </Box>
                    ) : (
                      <img
                        src={item.src}
                        alt={item.title}
                        loading="lazy"
                        style={{ width: "100%", display: "block" }}
                      />
                    )}
                  </ImageListItem>
                ))}
              </ImageList>
            </Paper>

            <Box textAlign="center">
              <Button
                variant="contained"
                color="primary"
                size={isXs ? "small" : "large"}
                onClick={() => openLightbox(0)}
                sx={{ textTransform: "none", mt: 2, px: 4 }}
                startIcon={<PhotoLibraryIcon />}
              >
                {language.code === "bg"
                  ? "Виж всички видеа и снимки"
                  : "View all media"}
              </Button>
            </Box>

            <Lightbox
              open={open}
              close={() => setOpen(false)}
              slides={slides}
              index={index}
              plugins={[Video]}
              on={{ view: ({ index }) => setIndex(index) }}
            />
          </>
        )}
      </Stack>
    </Container>
  );
};

export default Automotive;
