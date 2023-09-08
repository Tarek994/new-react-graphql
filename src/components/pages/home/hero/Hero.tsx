import { styled } from "@mui/material/styles";
import sad2 from "./hero-assets/sad2.jpg";
import happy from "./hero-assets/happy.jpg";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";


const HeroContainerImages = styled("div")({
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  marginTop: "0.5rem",
  "@media (max-width: 1200px)": {
    textAlign: "center",
    margin: "auto",
    padding: "1rem",
  },
});

const HeroImageRight = styled("img")({
  borderRadius: "20px",
  height: "auto",
  maxWidth: "250px",
  "@media (max-width: 1200px)": {
    maxWidth: "90%",
    marginTop: "0rem",
    margin: "4rem 1rem",
  },
},

);
const HeroImageLeft = styled("img")({
  borderRadius: "20px",
  height: "auto",
  maxWidth: "250px",
  marginTop: "3rem",
  "@media (max-width: 1200px)": {
    marginTop: "0rem",
    maxWidth: "90%",
    margin: "4rem 1rem",
  },
},);

const Hero = () => {
  return (
    <Grid container sx={{ marginTop: 8 }}>
      <Grid item xs={12} md={12} lg={6} sx={{ p: 2 }}>
        <Typography
          fontSize={'h4.fontSize'}
          fontWeight='800'
        >
          538 hours are lost every year to get home made meals. Imaging investing this time in building connections that will change your life, That’s what Eatnan is for!,
        </Typography>
      </Grid>

      <Grid item xs={12} md={12} lg={6} sx={{ p: 2 }}>
        <HeroContainerImages>
          <Grid container>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <HeroImageLeft className="img-sad" src={sad2} alt="sad" />
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <HeroImageRight className="img-happy" src={happy} alt="happy" />
            </Grid>
          </Grid>
        </HeroContainerImages>
      </Grid>
    </Grid >
  );
};

export default Hero;
