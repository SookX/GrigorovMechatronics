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
        alignItems: { xs: 'center', sm: 'flex-start' }, // Center on mobile, left-align on larger screens
        pt: { xs: 10, sm: 18 },
        pb: { xs: 6, sm: 10 },
        textAlign: { xs: 'center', sm: 'left' }, // Center text on mobile
      }}
    >
      <Stack
        spacing={2}
        useFlexGap
        sx={{ width: { xs: '100%', sm: '87%' } }}
      >
        {/* Title */}
        <Typography
        variant="h1"
        sx={{
            display: 'flex',
            flexDirection: "column",
            alignItems: { xs: 'center', sm: 'flex-start' }, 
            fontSize: { xs: '2rem', sm: 'clamp(2.8rem, 8vw, 4rem)' }, 
            textAlign: { xs: 'center', sm: 'left' }, 
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

{/* Description */}
<Typography
  sx={{
    color: 'text.secondary',
    width: { xs: '100%', sm: '75%' }, // More width control on large screens
    fontSize: { xs: '1rem', sm: '1.2rem' }, 
    textAlign: { xs: 'center', sm: 'left' }, 
    mt: { xs: 2, sm: 3 }, // Adjust spacing for different screen sizes
  }}
  variant="body1"
>
  Grigorov Mechatronics delivers cutting-edge automotive machinery designed for precision and efficiency. 
  Explore our innovative solutions, engineered to elevate performance and reliability in the industry.
</Typography>

        {/* Button Section */}
        <Stack
          direction="row"
          spacing={2}
          sx={{
            pt: 3,
            justifyContent: { xs: 'center', sm: 'flex-start' }, // Center on mobile, left-align on larger screens
            width: '100%',
          }}
        >
          <ButtonHero />
        </Stack>
      </Stack>
    </Container>
  );
}
