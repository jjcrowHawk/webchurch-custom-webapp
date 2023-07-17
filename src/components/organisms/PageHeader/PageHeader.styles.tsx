import { SxProps, Theme } from "@mui/material";
import { ColorResources } from "../../../models/colorResources";

const styles: { [key: string]: SxProps<Theme> } = {
  appBar: {
    backgroundColor: ColorResources.PRIMARY,
    transition: "background-color 0.3s ease-in-out",
  },
  appBarSticky: {
    backgroundColor: "#00000055",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.5)",
    transition:
      "background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  },
  toolbar: {
    transition: "height 0.3s ease-in-out",
    paddingTop: "4px",
    paddingBottom: { xs: "4px", sm: "4px" },
  },
  toolbarSticky: {
    transition: "height 0.3s ease-in-out",
    paddingTop: "4px",
    paddingBottom: { xs: "4px", sm: "4px" },
  },
  drawerButton: { mr: 2, display: { sm: "none" } },
  logoContainer: {
    ml: { xs: 0, sm: 6 },
    mr: { xs: 4, sm: 0 },
    flexGrow: 1,
    display: { xs: "flex", sm: "block" },
    justifyContent: { xs: "center", sm: "none" },
  },
  menuContainer: { display: { xs: "none", sm: "block" }, mr: 8 },
  navLink: {
    color: ColorResources.WHITE,
    fontFamily: "Libre Franklin",
    fontWeight: "500",
    ":hover": {
      color: ColorResources.ACCENT_TINT2,
      textShadow: `-1px 2px 13px ${ColorResources.ACCENT_TINT2}`,
    }
  },
  activeLink: {
    color: ColorResources.ACCENT,
  },
};

export default styles;
