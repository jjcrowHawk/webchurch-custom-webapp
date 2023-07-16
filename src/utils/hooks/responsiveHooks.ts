import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";

export const useIsMobileScreen = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("sm"));
}