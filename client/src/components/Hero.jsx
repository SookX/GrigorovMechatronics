import * as React from 'react';
import { useContext } from 'react';
import homePageData from "../text/homePage.json";
import { DataContext } from '../context/DataContext';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ButtonHero from '../customizations/ButtonHero';

export default function Hero() {
  const { language } = useContext(DataContext);
  const data = homePageData[language.code];
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        minHeight: '100vh',
        px: 2,
      }}
    >
      <Stack
        spacing={3}
        useFlexGap
        sx={{ width: { xs: '100%', sm: '85%'}, maxWidth: '1000px' }}
      >
        <Typography
          variant="h1"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: { xs: '2rem', sm: 'clamp(2.8rem, 8vw, 4rem)' },
            lineHeight: { xs: 1.2, sm: 1.3 },
            fontWeight: 700,
            color: '#f0f0f0',
            textShadow: '0 2px 4px rgba(0,0,0,0.4)',
          }}
        >
          {data.title}&nbsp;
          <Typography
            component="span"
            variant="h1"
            sx={(theme) => ({
              fontSize: 'inherit',
              fontWeight: 700,
              color: theme.palette.primary.light,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            })}
          >
            {data.highlight}
          </Typography>
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: '#e0e0e0',
            fontSize: { xs: '1rem', sm: '1.25rem' },
            fontWeight: 800,
            textAlign: 'center',
            lineHeight: 1.6,
            maxWidth: '750px',
            mx: 'auto',
          }}
        >
          {data.paragraph}
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            pt: 4,
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <ButtonHero label = {data.button}/>
        </Stack>
      </Stack>
    </Container>
  );
}
