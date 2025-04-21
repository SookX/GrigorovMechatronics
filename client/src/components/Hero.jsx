import * as React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ButtonHero from '../customizations/ButtonHero';

export default function Hero() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        height: '100%', 
      }}
    >
      <Stack
        spacing={2}
        useFlexGap
        sx={{ width: { xs: '100%', sm: '87%' } }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "white",
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center',
            fontSize: { xs: '2rem', sm: 'clamp(2.8rem, 8vw, 4rem)' },
            textAlign: 'center',
            lineHeight: { xs: 1.2, sm: 1.4 },
            fontWeight: 700,
          }}
        >
          Automotive&nbsp;Machinery&nbsp;
          <Typography
            component="span"
            variant="h1"
            sx={(theme) => ({
              fontSize: 'inherit',
              color: 'primary.main',
              ...theme.applyStyles('dark', {
                color: 'primary.light',
              }),
            })}
          >
            Solutions
          </Typography>
        </Typography>
            <br/>
        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            color: 'white',
            border: "0px solid",
            width: "100%",
            display: "flex",
            fontSize: { xs: '1rem', sm: '1.2rem' },
            textAlign: 'center',
            
          }}
        >
          Grigorov Mechatronics delivers cutting-edge automotive machinery designed for precision and efficiency.
          Explore our innovative solutions, engineered to elevate performance and reliability in the industry.
        </Typography>

        {/* Button */}
        <Stack
          direction="row"
          spacing={2}
          sx={{
            pt: 3,
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <ButtonHero />
        </Stack>
      </Stack>
    </Container>
  );
}
