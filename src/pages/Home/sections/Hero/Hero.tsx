import styled from "@emotion/styled"
import type { CSSProperties } from "react"

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
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center" as CSSProperties["textAlign"],
    color: "#fff",

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
        <div>
          <h1>Daniel Araújo</h1>
          <p>Desenvolvedor Web focado em experiências modernas</p>
        </div>
      </StyledHero>
    </>
  )
}

export default Hero
