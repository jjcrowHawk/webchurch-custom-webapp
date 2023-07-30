import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Image from "next/image";
import { ImageResourcesPath } from "../../../models/imageResources";
import { ColorResources } from "../../../models/colorResources";
import { useIsMobileScreen } from "../../../utils/hooks/responsiveHooks";

interface MainFeaturedPostProps {
  title?: string;
  backgroundImage: string;
  mainImage?: string;
}

const HomeHero = ({ backgroundImage }: MainFeaturedPostProps) => {
  const isMobile = useIsMobileScreen();
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "#000000",
        color: "#fff",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${backgroundImage})`,
        minHeight: { xs: "50vh", sm: "80vh" },
      }}
    >
      {/* Increase the priority of the hero background image */}
      <Image fill src={backgroundImage} alt={""} />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.6)",
        }}
      />
      <Grid container>
        <Grid item width="100%">
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
              textAlign: "center",
            }}
          >
            <Image
              src={ImageResourcesPath.HOME_HERO_ASSET}
              alt="home_hero_asset"
              width={isMobile ? 340 : 540}
              height={isMobile ? 280 : 450}
            />
            <Typography
              fontFamily="Jathafa"
              component="h1"
              fontSize={{ xs: "3rem", md: "4rem" }}
              color={ColorResources.WHITE}
            >
              Una Iglesia para las Familias
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default HomeHero;
