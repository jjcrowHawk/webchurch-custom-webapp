import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import styles from "./PageHeader.styles";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { useTheme, useMediaQuery } from '@mui/material';

const drawerWidth = 240;
const navItems = ["IGLESIA", "MINISTERIOS", "PREDICAS", "EVENTOS"];

const PageHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        component="nav"
        sx={trigger ? styles.appBarSticky : styles.appBar}
      >
        <Toolbar sx={trigger ? styles.toolbarSticky : styles.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              ml: { xs: 0, sm: 8 },
              mr: { xs: 4, sm: 0},
              flexGrow: 1,
              display: { xs: "flex", sm: "block" },
              justifyContent: { xs: "center", sm: "none" },
            }}
          >
            <Image
              alt="church-logo"
              width={isMobile ? 120 : 140}
              height={isMobile ? 42 : 56}
              src="/church_head_logo.png"
            />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" }, mr: 10 }}>
            {navItems.map((item) => (
              <Button key={item} sx={styles.navLink}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default PageHeader;
