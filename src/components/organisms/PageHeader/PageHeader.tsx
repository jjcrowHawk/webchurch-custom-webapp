import {
  Box,
  Button,
  IconButton,
  Link,
  SxProps,
  Theme,
  Toolbar,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import AppBar from "@mui/material/AppBar";
import styles from "./PageHeader.styles";
import MenuIcon from "@mui/icons-material/Menu";
import { ImageResourcesPath } from "../../../models/imageResources";
import NavDrawer from "./components/NavDrawer";
import usePageHeaderState from "./components/PageHeader.state";

const PageHeader = () => {
  const {
    isMobile,
    isNavDrawerOpen,
    hasLeftScreenTop,
    navDrawerWidth,
    links,
    handlers: { handleDrawerToggle },
  } = usePageHeaderState();

  return (
    <>
      <AppBar
        component="nav"
        sx={hasLeftScreenTop ? styles.appBarSticky : styles.appBar}
      >
        <Toolbar sx={hasLeftScreenTop ? styles.toolbarSticky : styles.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={styles.drawerButton}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={styles.logoContainer}>
            <Link href={links.home.path}>
              <Image
                alt="church-logo"
                width={isMobile ? 120 : 140}
                height={isMobile ? 42 : 56}
                src={ImageResourcesPath.NAV_LOGO}
              />
            </Link>
          </Box>
          <Box sx={styles.menuContainer}>
            {links.menu.map((item) => (
              <Button
                key={item.name}
                sx={{
                  ...styles.navLink,
                  ...(item.isActive ? styles.activeLink : {}),
                } as SxProps<Theme>}
                href={item.path}
              >
                {item.displayName}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <NavDrawer
          isOpen={isNavDrawerOpen}
          drawerWidth={navDrawerWidth}
          onDrawerToggle={handleDrawerToggle}
          navLinks={[links.home, ...links.menu]}
        />
      </Box>
    </>
  );
};

export default PageHeader;
