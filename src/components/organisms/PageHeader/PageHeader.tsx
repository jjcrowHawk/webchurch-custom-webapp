import {
  Box,
  Button,
  IconButton,
  Link,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import styles from "./PageHeader.styles";
import MenuIcon from "@mui/icons-material/Menu";
import { getHomeLink, getMenuLinks } from "../../../models/linkModel";
import { ImageResourcesPath } from "../../../models/imageResources";
import { usePathname } from "next/navigation";
import NavDrawer from "./components/NavDrawer";
import { useIsMobileScreen } from "../../../utils/hooks/responsiveHooks";

const drawerWidth = 240;
const homeLink = getHomeLink();
var navItems = getMenuLinks();

const PageHeader = () => {
  const isMobile = useIsMobileScreen();
  const currentPath = usePathname();
  navItems = navItems.map((link) => {
    link.isActive = link.path == currentPath;
    return link;
  });
  homeLink.isActive = homeLink.path == currentPath;

  const [isSticky, setIsSticky] = useState(false);
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);

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

  useEffect(() => {
    navItems = navItems.map((link) => {
      link.isActive = link.path == currentPath;
      return link;
    });
    homeLink.isActive = homeLink.path == currentPath;
  }, [currentPath]);

  const handleDrawerToggle = () => {
    setIsNavDrawerOpen((prevState) => !prevState);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

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
              ml: { xs: 0, sm: 6 },
              mr: { xs: 4, sm: 0 },
              flexGrow: 1,
              display: { xs: "flex", sm: "block" },
              justifyContent: { xs: "center", sm: "none" },
            }}
          >
            <Link href={homeLink.path}>
              <Image
                alt="church-logo"
                width={isMobile ? 120 : 140}
                height={isMobile ? 42 : 56}
                src={ImageResourcesPath.NAV_LOGO}
              />
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" }, mr: 8 }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                sx={{
                  ...styles.navLink,
                  ...(item.isActive ? styles.activeLink : {}),
                }}
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
          drawerWidth={drawerWidth}
          onDrawerToggle={handleDrawerToggle}
          navLinks={[homeLink, ...navItems]}
        />
      </Box>
    </>
  );
};

export default PageHeader;
