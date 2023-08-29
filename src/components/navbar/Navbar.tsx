import "./navbar.css";
import logo from "./nav-assets/logo.png";
import Grid from '@mui/material/Unstable_Grid2';
import Tabs from '@mui/material/Tabs';
import LinkTab from '@mui/material/Tab';

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
      style={{ backgroundColor: 'white' }}
      justifyItems="center"
      alignContent="center"
    >
      <Grid xs={3} md={2}>
        <img src={logo} alt="Logo" className="logo" />
      </Grid>
      <Grid
        container
        xs={8}
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
