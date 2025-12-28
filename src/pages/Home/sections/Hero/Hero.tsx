import styled from "@emotion/styled"
import { Button, Container, Grid, Typography } from "@mui/material"
import type { CSSProperties } from "react"
import TriangleParticles from "../../../../components/visual/TriangleParticles"
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Hero = () => {

  const StyledHero = styled("div")(()=> ({
    width: "100%",
    height: "100vh",
    //borderRadius: "5%",

    background:
      `linear-gradient(
      120deg,
      #ff5f6d,
      #845ec2,
      #2c73d2,
      #0f2027
      )`,

    backgroundSize: '400% 400%',
    animation:"gradientMove 10s ease infinite",

    "@keyframes gradientMove":{
      "0%":{
        backgroundPosition:"0% 50%"
      },
      "50%":{
        backgroundPosition:"100% 50%"
      },
      "100%":{
        backgroundPosition:"0% 50%"
      }
    },

    position: "relative" as CSSProperties["position"],
    overflow: "hidden",
    display: "flex",
    //alignItems: "center",
    //justifyContent: "center",
    //textAlign: "center" as CSSProperties["textAlign"],
    //color: "#fff",

    '&::after': {
      content: '""',
      position: 'absolute' as CSSProperties["position"],
      inset: 0,

      background: 'inherit',
      filter: 'blur(40px)',
      transform: 'scale(1.2)',
      zIndex: 0,
    },

    '& > *': {
      position: 'relative' as CSSProperties["position"],
      zIndex: 1,
    },
  }))

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg"> 
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography color="#fff" variant="h1" textAlign={"center"}>Daniel Araújo</Typography>
              <Typography color="#ffff" variant="h5" textAlign={"center"}>Full Stack Developer</Typography>
              <Grid container display={"flex"} justifyContent={"center"}>
                <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
                  <Button>
                    <InfoOutlinedIcon/>
                    About me
                  </Button>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
                  <Button>
                    <CodeOutlinedIcon/>
                    View Projects
                 </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TriangleParticles color="#ffffff" quantity={200}></TriangleParticles>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero
