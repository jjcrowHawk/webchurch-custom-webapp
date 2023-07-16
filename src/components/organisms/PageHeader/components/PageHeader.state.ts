import { usePathname } from "next/navigation";
import { useIsMobileScreen } from "../../../../utils/hooks/responsiveHooks";
import { useEffect, useState } from "react";
import { useScrollTrigger } from "@mui/material";
import { LinkModel, getHomeLink, getMenuLinks } from "../../../../models/linkModel";

interface PageHeaderState {
  isMobile: boolean;
  isNavDrawerOpen: boolean;
  hasLeftScreenTop: boolean;
  navDrawerWidth: number;
  links: {
    home: LinkModel,
    menu: Array<LinkModel>
  }
  handlers: {
    handleDrawerToggle: () => void;
  }
}

const drawerWidth = 240;
const homeLink = getHomeLink();
var navItems = getMenuLinks();

const usePageHeaderState = () : PageHeaderState => {
  const isMobile = useIsMobileScreen();
  const currentPath = usePathname();
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);

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

  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  let menuLinks = navItems.map((link) => {
    link.isActive = link.path == currentPath;
    return link;
  });
  let mainLink = {...homeLink, isActive: homeLink.path == currentPath}

  return {
    isMobile,
    isNavDrawerOpen,
    navDrawerWidth: drawerWidth,
    hasLeftScreenTop: scrollTrigger,
    links: {
      home: mainLink,
      menu: menuLinks
    },
    handlers: {
      handleDrawerToggle
    }
  }
}

export default usePageHeaderState