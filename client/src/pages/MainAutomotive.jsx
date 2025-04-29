import { useState } from "react";
import { Outlet } from "react-router-dom";
import SidebarContent from './SidebarContent';
import {
  Container,
  IconButton,
  Drawer,
  Box,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 260;

const MainAutomotive = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Container maxWidth="lg" sx={{ display: "flex", py: 4, pt: 16 }}>
      {/* Permanent Sidebar for Desktop */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <SidebarContent />
      </Box>

      {/* Temporary Drawer for Mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <SidebarContent />
      </Drawer>

      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1, pl: { xs: 0, md: 3 } }}>
        {/* Mobile toggle button */}
        <Box sx={{ display: { xs: "block", md: "none" }, mb: 2 }}>
          <IconButton
            onClick={handleDrawerToggle}
            aria-label="open sidebar"
            sx={{ color: "primary.main" }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Box>

        {/* Routed content */}
        <Outlet />
      </Box>
    </Container>
  );
};

export default MainAutomotive;
