import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Typewriter from 'typewriter-effect';
import sad2 from "./hero-assets/sad2.jpg";
import happy from "./hero-assets/happy.jpg";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { colorScheme } from "../../../../index"

const HeroContainer = styled("div")({
    padding: "2rem 2rem",
    "@media (max-width: 1200px)": {
        padding: "1rem",
        textAlign: "center",
    },
});

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

const HeroText = styled("div")({
    color: "var(--color-dark)",
    fontSize: "2rem",
    fontWeight: 600,
    minHeight: "18rem",
    "@media (max-width: 1200px)": {
        textAlign: "start",
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
        <Grid container spacing={1}
            style={{
                margin: "0.3rem auto 2rem auto",
                padding: "2rem 0rem",
            }}>
            <Grid item xs={12} md={12} lg={6}>
                <HeroContainer>
                    <HeroText>
                        <p>
                            <Typewriter
                                options={{
                                    strings: [
                                        "538 hours are lost every year to get home made meals. Imaging investing this time in building connections that will change your life, That’s what Eatnan is for!",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </p>
                    </HeroText>
                    <Button
                        component={Link}
                        to="about"
                        className="hero-button"
                        style={{
                            backgroundColor: colorScheme.peach,
                            color: "var(--color-light)",
                            padding: "0.5rem 1.2rem",
                            marginTop: "1rem",
                            textAlign: "center",
                        }}
                    >
                        Know More
                    </Button>
                </HeroContainer>
            </Grid>

            <Grid item xs={12} md={12} lg={6}>
                <HeroContainerImages>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6} lg={6}>
                            <HeroImageLeft className="img-sad" src={sad2} alt="sad" />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <HeroImageRight className="img-happy" src={happy} alt="happy" />
                        </Grid>
                    </Grid>
                </HeroContainerImages>
            </Grid>
        </Grid>
    );
};

export default Hero;
