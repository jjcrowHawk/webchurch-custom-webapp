
import { Box, Typography, Divider, List, ListItem, ListItemButton, ListItemText, Theme, SxProps, Drawer } from '@mui/material'
import React from 'react'
import { LinkModel } from '../../../../models/linkModel'
import { ColorResources } from '../../../../models/colorResources'
import DrawerBody from './DrawerBody';

interface NavDrawerProps {
  isOpen: boolean;
  onDrawerToggle: () => void;
  drawerWidth: number;
  navLinks: Array<LinkModel>;
}

const styles: { [key: string] : SxProps<Theme>} = {
  container: {
    display: { xs: "block", sm: "none" },
  },
  innerDrawerContainer: {
    boxSizing: "border-box",
    backgroundColor: ColorResources.PRIMARY
  }
}

const NavDrawer: React.FC<NavDrawerProps> = ({ isOpen, onDrawerToggle, drawerWidth, navLinks }: NavDrawerProps) => {
  return (
        <Drawer
          variant="temporary"
          open={isOpen}
          onClose={onDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            ...styles.container, 
            "& .MuiDrawer-paper": {
              ...styles.innerDrawerContainer,
              width: drawerWidth
          }}}
        >
          <DrawerBody onDrawerToggle={onDrawerToggle} navLinks={navLinks}/>
        </Drawer>
  )
}

export default NavDrawer