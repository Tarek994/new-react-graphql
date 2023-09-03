import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Grid
      container
      style={{
        width: "100%",
        backgroundColor: "var(--color-primary)",
      }}
    >
      <Grid xs={12}
        container
        item
        style={{
          maxWidth: "1200px",
          margin: "0.5rem auto",
          padding: "2rem 0rem",
          alignItems: "center",
        }}

      >
        <Grid
          item
          style={{
            borderRight: "1px solid #000",
          }}
          xs={12}
          lg={6}
        >
          <Link
            to="section-01"
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "2rem",
            }}
          >
            EATNAN
          </Link>
          <Typography variant="body2">
            <i>Learn more about the app by visiting the About page.</i>
          </Typography>
        </Grid>
        <Grid
          item
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          xs={12}
          lg={6}
        >
          <ul>
            <li>
              <Link
                to="/"
                style={{
                  color: "var(--color-light)",
                  backgroundColor: "var(--color-dark)",
                  padding: "0.5rem 1rem",
                  border: "none",
                  borderRadius: "var(--border-radius-secondary)",
                  fontSize: "12px",
                }}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={{
                  color: "var(--color-light)",
                  backgroundColor: "var(--color-dark)",
                  padding: "0.5rem 1rem",
                  border: "none",
                  borderRadius: "var(--border-radius-secondary)",
                  fontSize: "12px",
                }}
              >
                ABOUT
              </Link>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
