import { Theme } from "@emotion/react"
import { SxProps, Box, Typography, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { ColorResources } from "../../../../models/colorResources"
import { LinkModel } from "../../../../models/linkModel"

interface DrawerBodyProps {
  onDrawerToggle: () => void,
  navLinks: Array<LinkModel>
}

const styles: { [key: string] : SxProps<Theme>} = {
  container: {
    backgroundColor: ColorResources.PRIMARY,
    textAlign: "center"
  },
  drawerTitle: {
    my: 2,
    color: ColorResources.WHITE,
    fontWeight: "bold",
  },
  drawerItemText: {
    color: ColorResources.WHITE,
    pb: 2,
  },
  drawerItemSelected: {
    color: ColorResources.ACCENT,
    fontWeight: "bold",
    textShadow: `-1px 2px 10px ${ColorResources.ACCENT_TINT2}`,
  }
}

const DrawerBody: React.FC<DrawerBodyProps> = ({ navLinks, onDrawerToggle}: DrawerBodyProps) => {
  return (
    <Box onClick={onDrawerToggle} sx={styles.container}>
    <Typography variant="h6" sx={styles.drawerTitle}>
      MENU
    </Typography>
    <Divider />
    <List>
      {navLinks.map((item) => (
        <ListItem key={item.name} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }} href={item.path}>
            <ListItemText primary={item.displayName} sx={{...styles.drawerItemText, ...(item.isActive ? styles.drawerItemSelected : {})}} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
  )
}

export default DrawerBody