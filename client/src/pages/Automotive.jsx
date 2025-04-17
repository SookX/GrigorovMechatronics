import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const machineNames = [
  "Engine Tester",
  "Assembly Robot",
  "Hydraulic Press",
  "Conveyor Belt",
  "Laser Cutter",
];

const drawerWidth = 260;

const Automotive = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Sidebar content remains identical for both mobile and desktop.
  const sidebarContent = (
    <Box
      sx={{
        width: drawerWidth,
        p: 2,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 3,
          fontWeight: "bold",
          color: "primary.main",
        }}
      >
        Machines
      </Typography>
      <List>
        {machineNames.map((name) => (
          <ListItem key={name} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              sx={{
                borderRadius: 1,
                transition: "0.3s",
                "&:hover": {
                  bgcolor: "primary.light",
                },
              }}
            >
              <ListItemText
                primary={name}
                primaryTypographyProps={{
                  color: "text.primary",
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Container
      maxWidth="lg"
      sx={{ display: "flex", py: 4, pt: 16 }}
    >
      {/* Permanent Sidebar for Desktop */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        {sidebarContent}
      </Box>

      {/* Temporary Drawer for Mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {sidebarContent}
      </Drawer>

      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1, pl: { xs: 0, md: 3 } }}>
        {/* Mobile toggle button */}
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            mb: 2,
          }}
        >
          <IconButton
            onClick={handleDrawerToggle}
            aria-label="open sidebar"
            sx={{ color: "primary.main" }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Box>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
          Automotive Content
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {/* Place your main content here */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit nisl in mauris commodo, non maximus velit aliquam. Suspendisse potenti.
        </Typography>
      </Box>
    </Container>
  );
};

export default Automotive;
