import { styled } from "@mui/system";
function App() {
  return (
    <MainContainer>
      <HeroSection>
        <h1>Managing Your Money Doesn't Have to be Complicated</h1>
      </HeroSection>
      <About>
        <Box>
          <h2>Get Started</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            luctus, odio ac lacinia fermentum, libero metus luctus odio, a
            sollicitudin odio metus a justo. Donec sollicitudin odio metus a
            justo.
          </p>
        </Box>
        <Box>
          <h2>Track Your Spending</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            luctus, odio ac lacinia fermentum, libero metus luctus odio, a
            sollicitudin odio metus a justo. Donec sollicitudin odio metus a
            justo.
          </p>
        </Box>
      </About>
    </MainContainer>
  );
}

const About = styled ("div")({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  padding: "50px",
});

const Box = styled("div")({
  // half width of the parent container
  width: "50%",
  padding: "20px",
  backgroundColor: "#fff",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "5px",
  margin: "10px",
  "& h2": {
    color: "#023047",
  },
  "& p": {
    color: "#333",
  },
});

const MainContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#f5f5f5",
  fontFamily: "sans-serif",
});

const HeroSection = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "30vh",
  backgroundColor: "#023047",
  padding: "50px",
  fontFamily: "sans-serif",
  color: "#fff",
  width: "100%",
});

export default App;
