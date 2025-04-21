import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from '../customizations/ColorModeIconDropdown';
import Sitemark from './SitemarkIcon';
import Link from '@mui/material/Link';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Link href="/" sx={{ color: 'primary.main' }}>
              <Sitemark />
            </Link>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              <Link href="/about" underline="none">
                <Button variant="text" color="primary" size="small">
                  About
                </Button>
              </Link>
              <Link href="/automotive" underline="none">
                <Button variant="text" color="primary" size="small">
                  Automotive Machines
                </Button>
              </Link>
              <Link href="/contacts" underline="none">
                <Button variant="text" color="primary" size="small">
                  Gallery
                </Button>
              </Link>
              <Link href="/contacts" underline="none">
                <Button variant="text" color="primary" size="small">
                  Contacts
                </Button>
              </Link>
            </Box>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" sx={{ color: 'primary.main' }} />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)} sx={{ color: 'primary.main' }}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)} sx={{ color: 'primary.main' }}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                {/* Mobile menu items */}
                <MenuItem>
                  <Button color="primary" variant="text" fullWidth>
                    Features
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="text" fullWidth>
                    Testimonials
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="text" fullWidth>
                    Highlights
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="text" fullWidth>
                    Pricing
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="text" fullWidth>
                    FAQ
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="text" fullWidth>
                    Blog
                  </Button>
                </MenuItem>
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button color="primary" variant="contained" fullWidth>
                    Sign up
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="outlined" fullWidth>
                    Sign in
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
