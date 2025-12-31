import styled from "@emotion/styled"
import { Button, Container, Stack, Typography } from "@mui/material"
import TriangleParticles from "../../../../components/visual/TriangleParticles"
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const StyledHero = styled("section")(({ theme }) => ({
  width: "100%",
  height: "100dvh",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",

  color: theme.palette.primary.main,

  background: `linear-gradient(
    120deg,
    ${theme.palette.secondary.main},
    #562e97ff,
    ${theme.palette.background.default}
  )`,
  backgroundSize: "400% 400%",
  animation: "gradientMove 10s ease infinite",

  "@keyframes gradientMove": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
    "100%": { backgroundPosition: "0% 50%" },
  },
}));

const ParticlesWrapper = styled("div")({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  zIndex: 0,
  pointerEvents: "none",
});

const Hero = () => {
  return (
    <>
      <StyledHero>
          <ParticlesWrapper>
            <TriangleParticles color="#ffffff" quantity={100} />
          </ParticlesWrapper>
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}> 
            <Stack spacing={3} alignItems="center">
              <Typography variant="h1" textAlign="center">
                Daniel T. Araújo
              </Typography>
              <Typography variant="h4" textAlign="center">
                Full Stack Developer
              </Typography>
              <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
                <Button startIcon={<InfoOutlinedIcon />} variant="outlined">
                  About me
                </Button>
                <Button startIcon={<CodeOutlinedIcon />} variant="outlined">
                  My Projects
                </Button>
              </Stack>
            </Stack>
          </Container>
      </StyledHero>
    </>
  )
}

export default Hero
