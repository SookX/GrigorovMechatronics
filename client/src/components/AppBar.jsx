import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import logo from "../assets/logo.png";

import { useContext } from 'react';
import Flag from 'react-world-flags';
import { DataContext } from '../context/DataContext';
import appBarData from "../text/appBar.json";

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
  const { language, setLanguage, languages } = useContext(DataContext);
  const data = appBarData[language.code];

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    console.log(`Language changed to: ${lang.label}`);
  };

  const renderNavLinks = () => (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
      <Link href="/about" underline="none">
        <Button variant="text" sx={{ color: 'black' }} size="small">
          {data.item1}
        </Button>
      </Link>
      <Link href="/automotive" underline="none">
        <Button variant="text" sx={{ color: 'black' }} size="small">
          {data.item2}
        </Button>
      </Link>
      <Link href="/contacts" underline="none">
        <Button variant="text" sx={{ color: 'black' }} size="small">
          {data.item3}
        </Button>
      </Link>
      <Link href="/contacts" underline="none">
        <Button variant="text" sx={{ color: 'black' }} size="small">
          {data.item4}
        </Button>
      </Link>
    </Box>
  );

  const renderMobileNavLinks = () => (
    <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton onClick={toggleDrawer(false)} sx={{ color: 'black' }}>
          <CloseRoundedIcon />
        </IconButton>
      </Box>
      <MenuItem>
        <Button variant="text" fullWidth sx={{ color: 'black' }}>
          {data.item1}
        </Button>
      </MenuItem>
      <MenuItem>
        <Button variant="text" fullWidth sx={{ color: 'black' }}>
          {data.item2}
        </Button>
      </MenuItem>
      <MenuItem>
        <Button variant="text" fullWidth sx={{ color: 'black' }}>
          {data.item3}
        </Button>
      </MenuItem>
      <MenuItem>
        <Button variant="text" fullWidth sx={{ color: 'black' }}>
          {data.item4}
        </Button>
      </MenuItem>
    </Box>
  );

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
        <StyledToolbar variant="dense" sx={{ background: "white" }}>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Link href="/" sx={{ color: 'black' }}>
              <Stack alignItems="center" sx={{ pr: 2 }}>
                <img src={logo} alt="Company Logo" width="30px" />
              </Stack>
            </Link>
            {renderNavLinks()}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* Language Switcher */}
            <IconButton
              onClick={() => {
                const currentIndex = languages.findIndex(lang => lang.code === language.code);
                const nextIndex = (currentIndex + 1) % languages.length;
                handleLanguageChange(languages[nextIndex]);
              }}
              sx={{ color: 'black' }}
            >
              <Stack direction="row" alignItems="center" gap={0.5}>
                <Flag code={language.flag} height="16" />
              </Stack>
            </IconButton>

            {/* Mobile Menu Icon */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
              <IconButton aria-label="Menu button" onClick={toggleDrawer(true)} sx={{ color: 'black' }}>
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
                {renderMobileNavLinks()}
              </Drawer>
            </Box>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
