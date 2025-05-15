import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { Box, Typography, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';

const machineNames = [
  { en: "Resistance Welder - Cable to terminal (Semi-automated)", bg: "Съпротивително заваряване – Кабел към терминал (полуавтоматизирано)", link: "/resistance_welder" },
  { en: "Laser Stripping Machine - Laser Stripping metal cable", bg: "Лазерна машина за обелване – Лазерно обелване на метален кабел", link: "/laser_stripping" },
  { en: "Laser weld bush to flange - Semi-automated", bg: "Лазерно заваряване на втулка към фланец (полуавтоматизирано)", link: "/laser_weld_bush" },
  { en: "Press Fit Machine with 3D Scanning GOCATOR (LMI Technologies)", bg: "Преса за вграждане с 3D сканиране GOCATOR (LMI Technologies)", link: "/fit_machine" },
  { en: "Wire Bending Machine", bg: "Машина за огъване на проводници", link: "/wire_bending" },
  { en: "Loading Robot Flange Crimp", bg: "Робот за зареждане и кримпване на фланци", link: "/robot_flange" },
  { en: "EDP Hot Bar Soldering", bg: "EDP спояване с гореща шина", link: "/edp" },
  { en: "Plunger to Housing Assembly Machine", bg: "Машина за асемблиране на плунжер към корпус", link: "/plunger" },
];

const SidebarContent = () => {
  const { language } = useContext(DataContext);
  const currentLang = language.code;

  return (
    <Box
      sx={{
        width: 260,
        p: 2,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Link to="/automotive" style={{ textDecoration: 'none' }}>
        <Typography
          variant="h6"
          sx={{
            mb: 3,
            fontWeight: "bold",
            color: "primary.main",
            cursor: "pointer",
            '&:hover': { color: 'primary.dark' }
          }}
        >
          {currentLang === 'en' ? 'Machines' : 'Машини'}
        </Typography>
      </Link>
      <List>
        {machineNames.map((name, index) => (
          <NavLink to={`/automotive${name.link}`} key={index} style={{ textDecoration: 'none' }}>
            <ListItem disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                sx={{
                  borderRadius: 1,
                  transition: "0.3s",
                  '&:hover': { bgcolor: "primary.light" },
                }}
              >
                <ListItemText
                  primary={currentLang === 'bg' ? name.bg : name.en}
                  primaryTypographyProps={{
                    color: "text.primary",
                    fontWeight: 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );
};

export default SidebarContent;
