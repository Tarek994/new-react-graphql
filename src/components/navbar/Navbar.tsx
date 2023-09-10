import "./navbar.css";
import Grid from '@mui/material/Unstable_Grid2';
import Tabs from '@mui/material/Tabs';
import LinkTab from '@mui/material/Tab';
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Navbar = () => {
  const handleChange = (e: any) => {
    console.log(e)
  }
  return (
    <Grid
      container
      xs={12}
      md={12}
      maxWidth={'lg'}
      justifyContent="flex-end"
      justifyItems="center"
      alignContent="center"
      alignItems="baseLine"
      sx={{ p: 2 }}>

      <Grid xs={6} md={2}>
        <Box>
          <Typography sx={{

            fontSize: {
              xs: 22,
            },
            fontFamily: 'ADLaM Display',
            fontWeight: 800,
          }}>
            Eatnan
          </Typography>
        </Box>
      </Grid>
      <Grid
        container
        xs={6}
        md={10}
        justifyContent="flex-end"
        justifyItems="center"
        alignContent="center"
      >
        <div>
          <Tabs
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <LinkTab label="About" href='/#/about' />
            <LinkTab label="Home" href='/#' />
          </Tabs>
        </div>
      </Grid>
    </Grid >
  );
};

export default Navbar;
