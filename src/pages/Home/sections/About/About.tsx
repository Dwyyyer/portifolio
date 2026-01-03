import { Container, Divider, Stack, styled, Typography } from "@mui/material";

const About = () => {
  const StyledAbout = styled("section")(({ theme }) => ({
    width: "100%",
    minHeight: "100dvh",
    zIndex: 100,
    backgroundColor: theme.palette.background.default,
  }));

  return (
    <>
    <StyledAbout>
      <Container maxWidth="lg" sx={{ position: "relative"}}>
        <Stack spacing={2} alignItems="center">
            <Typography variant="h3">About Me</Typography>
              <Divider sx={{
                width: "300px",
                height: "2px",
                backgroundColor: "#fff",
              }}></Divider>
        </Stack>
      </Container>
    </StyledAbout>
    </>
  )
}

export default About
