import { styled } from "@mui/material";

const About = () => {
  const StyledAbout = styled("section")(({ theme }) => ({
    width: "100%",
    minHeight: "100vh",
    zIndex: 100,
    backgroundColor: theme.palette.background.paper,
  }));

  return (
    <>
    <StyledAbout />
    </>
  )
}

export default About
