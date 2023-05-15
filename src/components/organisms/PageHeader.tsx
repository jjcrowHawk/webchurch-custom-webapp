import { Link, Stack, Toolbar, useScrollTrigger } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import styles from "./PageHeader.styles";

const PageHeader = () => {
  const [isSticky, setIsSticky] = useState(false);

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

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <AppBar
      component="nav"
      sx={trigger ? styles.appBarSticky : styles.appBar}
    >
      <Toolbar sx={trigger ? styles.toolbarSticky : styles.toolbar}>
        <Grid2
          container
          spacing={12}
          display={"flex"}
          justifyContent="space-around"
          alignItems="center"
          paddingBottom="5px"
          paddingTop="5px"
          width="100%"
        >
          <Grid2 marginLeft={"30px"}>
            <Image
              alt="church-logo"
              width={140}
              height={56}
              src="/church_head_logo.png"
            />
          </Grid2>
          <Grid2
            xs={7}
            display="flex"
            alignItems="center"
            justifyContent={"end"}
          >
            <Stack direction={"row"} spacing={3}>
              <Link sx={styles.navLink} underline="none" href="#">IGLESIA</Link>
              <Link sx={styles.navLink} underline="none" href="#">MINISTERIOS</Link>
              <Link sx={styles.navLink} underline="none" href="#">PREDICAS</Link>
              <Link sx={styles.navLink} underline="none" href="#">EVENTOS</Link>
            </Stack>
          </Grid2>
        </Grid2>
      </Toolbar>
    </AppBar>
  );
};

export default PageHeader;
