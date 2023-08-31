import * as React from 'react';
import { Grid } from '@mui/material';
import Hero from '../../components/pages/home/hero/Hero';




const Home = () => {
    return (
        <Grid xs={12} container style={{ minHeight: '100vh',marginTop:'0.5rem'  }}>
            <Grid item xs={12} style={{maxWidth: '1200px', margin:'auto' }}> 
            <Hero/>
            </Grid>
        </Grid>
    )
}

export default Home