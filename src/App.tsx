import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./containers/Homepage";
import About from "./components/pages/about/About";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

const MainGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: 'lightblue'
}));


function App() {
  return (
    <Router>
      <MainGrid justifyContent="center" xs={12} container maxWidth={'100%'}>
        <Grid maxWidth="lg" spacing={2} xs={12} container>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Grid>
      </MainGrid>

    </Router>
  );
}

export default App;