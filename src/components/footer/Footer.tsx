import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Grid
      xs={12}
      container
      style={{
        width: "100%",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <Grid xs={11}
        container
        item
        style={{
          maxWidth: "1200px",
          margin: "0.5rem auto",
          padding: "1rem",
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}

      >
        <Grid
          xs={12} sm={12}
          md={6}
          container
          item
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "1rem",
          }}
        >

          <Grid item sm={12} xs={12}>
            <Link
              to="section-01"
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "2rem",
                fontFamily: 'ADLaM Display',
                fontWeight: 800
              }}
            >
              EATNAN
            </Link>
          </Grid>

          <Grid item container md={12} lg={12} sm={6} xs={12}
            style={{
              textAlign: "start",
            }}>
            <Typography variant="body2">
              <i>Learn more about the app by visiting the About page.</i>
            </Typography>
          </Grid>
        </Grid>

        {/* navegation */}
        <Grid xs={6} sm={6} md={6} lg={6}
          container
          item
          sx={{
            display: "flex",
            justifyContent: {
              lg: "flex-end",
              sm: "flex-start",
            }

          }}>
          <Grid item lg={1} md={2} sm={2} xs={2}
            sx={{
              marginRight: {
                xs: 4,
              }
            }}>
            <Link
              to="/"
              style={{
                padding: "0.5rem 1rem",
                border: "none",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: "800",
              }}
            >
              HOME
            </Link>
          </Grid>

          <Grid item lg={1} md={2} sm={2} xs={2}>
            <Link
              to="/about"
              style={{
                padding: "0.5rem 1rem",
                border: "none",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: "800",
              }}
            >
              ABOUT
            </Link>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;