import * as React from 'react';
import { Grid } from '@mui/material';
import Hero from '../../components/pages/home/hero/Hero';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { useTheme } from '@emotion/react';
import { Fade, AttentionSeeker } from "react-awesome-reveal";
import Second from '../../components/pages/home/second/Second';
import Cards from "../../components/pages/home/cards/Cards";


const Home = () => {
    const theme = useTheme()
    console.log('🚀 --> file: index.tsx:10 --> Home --> theme:', theme)
    return (
        <Grid xs={12} container sx={{ paddingTop: 8,
            paddingBottom: {
                lg:8,
                md:6,
                sm:4,
                xs:2,
            } 
        }}>
            <Grid item xs={12}>
                <Hero />
            </Grid>
            <Grid item xs={12} display='center' justifyContent='center' sx={{ paddingTop: 8, paddingBottom: 8, color: 'primary.dark' }}>
                <AttentionSeeker effect='shakeY'>
                    <KeyboardDoubleArrowDownIcon sx={{ fontSize: 'h1.fontSize' }} />
                </AttentionSeeker>
            </Grid>
            <Grid item xs={12}>
                <Second/>
            </Grid>
            <Grid item xs={12} display='center' justifyContent='center' sx={{ paddingTop: 8, paddingBottom: 8, color: 'primary.dark' }}>
                <AttentionSeeker effect='shakeY'>
                    <KeyboardDoubleArrowDownIcon sx={{ fontSize: 'h1.fontSize' }} />
                </AttentionSeeker>
            </Grid>
            <Grid item xs={12}>
                <Cards/>
            </Grid>
        </Grid >
    )
}

export default Home