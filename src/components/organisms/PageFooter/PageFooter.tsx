import {
  Box,
  Divider,
  Grid,
  Icon,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { ImageResourcesPath } from "../../../models/imageResources";
import Image from "next/image";
import { ColorResources } from "../../../models/colorResources";
import {
  Email,
  Facebook,
  Instagram,
  Phone,
  YouTube,
} from "@mui/icons-material";
import { StyleSheet } from "../../../types/StyleSheet";

const styles: StyleSheet = {
  siteLink: {
    color: ColorResources.WHITE,
    fontFamily: "Libre Franklin",
    ":hover": {
      color: ColorResources.ACCENT_TINT2,
      // textShadow: `-1px 2px 13px ${ColorResources.ACCENT_TINT2}`,
    },
  },
  socialIcon: {
    color: ColorResources.PRIMARY_LIGHT,
    ":hover": {
      color: ColorResources.ACCENT,
      transition: "transform 0.3s ease",
      transform: "translateY(-6px)",
    },
  },
};

const PageFooter = () => {
  return (
    <Box
      sx={{
        px: { xs: 4, md: 11 },
        pt: 5,
        pb: 1,
        backgroundColor: ColorResources.PRIMARY,
      }}
    >
      <Grid container sx={{ pb: 4.5 }}>
        <Grid item flexGrow={{ xs: 1, md: "none" }} md={2}>
          <Stack alignItems="center">
            <Image
              alt="church-logo"
              width={140}
              height={56}
              src={ImageResourcesPath.NAV_LOGO}
            />
            <Divider
              flexItem
              sx={{ backgroundColor: ColorResources.PRIMARY_TINT3, my: 2.5 }}
            />
            <Typography color={ColorResources.WHITE} fontWeight="bold">
              Síguenos en
            </Typography>
            <Stack direction="row" sx={{ pt: 0.5 }}>
              <IconButton
                sx={styles.socialIcon}
                href="https://www.facebook.com/CasaEmanuel.ec"
              >
                <Facebook fontSize="large" />
              </IconButton>
              <IconButton
                sx={styles.socialIcon}
                href="https://www.instagram.com/casaemanuel.ec/"
              >
                <Instagram fontSize="large" />
              </IconButton>
              <IconButton
                sx={styles.socialIcon}
                href="https://www.youtube.com/@casaemanuel4558"
              >
                <YouTube fontSize="large" />
              </IconButton>
            </Stack>
          </Stack>
        </Grid>
        <Grid item flexGrow={1} sx={{ pt: { xs: 7, md: 0 } }}>
          <Grid
            container
            spacing={7}
            sx={{
              pl: { xs: 0, md: 5 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Grid item xs={12} md={"auto"}>
              <Typography color={ColorResources.PRIMARY_LIGHT} sx={{ pb: 2 }}>
                ACERCA DE
              </Typography>
              <Stack spacing={0.5}>
                <Link underline="none" href="#">
                  <Typography color={ColorResources.WHITE} sx={styles.siteLink}>
                    La Iglesia
                  </Typography>
                </Link>
                <Link underline="none" href="#">
                  <Typography color={ColorResources.WHITE} sx={styles.siteLink}>
                    Equipo Pastoral
                  </Typography>
                </Link>
                <Link underline="none" href="#">
                  <Typography color={ColorResources.WHITE} sx={styles.siteLink}>
                    Preguntas Frecuentes
                  </Typography>
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={12} md={"auto"}>
              <Typography color={ColorResources.PRIMARY_LIGHT} sx={{ pb: 2 }}>
                MINISTERIOS
              </Typography>
              <Stack spacing={0.5}>
                <Link underline="none" href="#">
                  <Typography color={ColorResources.WHITE} sx={styles.siteLink}>
                    Inquebrantables
                  </Typography>
                </Link>
                <Link underline="none" href="#">
                  <Typography color={ColorResources.WHITE} sx={styles.siteLink}>
                    Empoderadas
                  </Typography>
                </Link>
                <Link underline="none" href="#">
                  <Typography color={ColorResources.WHITE} sx={styles.siteLink}>
                    Saetas
                  </Typography>
                </Link>
                <Link underline="none" href="#">
                  <Typography color={ColorResources.WHITE} sx={styles.siteLink}>
                    Plantados
                  </Typography>
                </Link>
                <Link underline="none" href="#">
                  <Typography color={ColorResources.WHITE} sx={styles.siteLink}>
                    Parejas
                  </Typography>
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={12} md={"auto"}>
              <Typography color={ColorResources.PRIMARY_LIGHT} sx={{ pb: 2 }}>
                VISÍTANOS
              </Typography>
              <Stack spacing={0.5}>
                <Typography color={ColorResources.WHITE}>
                  Av. Enrique Ponce Luque, <br />
                  Frente al Colegio Aurora Estrada. Babahoyo.
                </Typography>
                <Typography color={ColorResources.WHITE} paddingTop={2}>
                  Horarios de Atención:
                </Typography>
                <Typography color={ColorResources.WHITE} paddingTop={1}>
                  09H00 - 19H00
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={"auto"}>
              <Typography color={ColorResources.PRIMARY_LIGHT} sx={{ pb: 2 }}>
                CONTÁCTANOS
              </Typography>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1.2}>
                  <Icon color="info">
                    <Phone />
                  </Icon>
                  <Typography color={ColorResources.WHITE}>
                    099 455 3609
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1.2}>
                  <Icon color="info">
                    <Email />
                  </Icon>
                  <Typography color={ColorResources.WHITE}>
                    casa.emanuel2021@gmail.com
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ backgroundColor: ColorResources.PRIMARY_TINT3 }} />
      <Stack
        alignItems="center"
        spacing={{ xs: 5, md: 2 }}
        sx={{ pt: 4, pb: 2 }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          spacing={{ xs: 1.7, md: 2 }}
        >
          <Typography color={ColorResources.PRIMARY_LIGHT}>
            © 2023 Casa Emanuel
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ backgroundColor: ColorResources.PRIMARY_TINT3 }}
          />
          <Link href="#" color={ColorResources.WHITE}>
            Términos y Condiciones
          </Link>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ backgroundColor: ColorResources.PRIMARY_TINT3 }}
          />
          <Link href="#" color={ColorResources.WHITE}>
            Políticas de Privacidad
          </Link>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Typography color={ColorResources.PRIMARY_LIGHT}>
            Developed by &nbsp;
          </Typography>
          <Link href="#" color={ColorResources.ACCENT_TINT1}>
            Juan Crow Washbrum
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default PageFooter;
