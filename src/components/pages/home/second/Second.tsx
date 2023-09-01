import React from 'react';
import { styled } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import group from "./second-assets/group.jpg";
import hands from "./second-assets/hands.jpg";
import { theme } from "../../../../index";

const MainSecond = styled('div')({
  padding: "1rem 1rem",
  "@media (max-width: 992px)": {
    textAlign: "center",
    padding: "2rem 1rem",
  },
});

const SecondTextTop = styled('div')({
  marginBottom: '2rem',
  textAlign: "start",
});

const SecondParagraph = styled('div')({
  padding: '2rem 1rem',
  textAlign: "start",
});

const SecondImgGroup = styled('img')({
  width: '100%',
  borderRadius: '20px 0px 0px 20px',

  "@media (max-width: 1198px)": {

    borderRadius: '20px 20px 0px 0px',
  },

});

const SecondImgHands = styled('img')({
  width: '100%',
  borderRadius: '0px 20px 20px 0px',
  "@media (max-width: 1198px)": {
    borderRadius: '0px 0px 20px 20px ',
  },

});

const Second = () => {
  const secondaryColor = theme.palette.secondary.main;

  return (
    <MainSecond>
      <Grid container xs={12} sm={11} md={11} lg={12}
        sx={{
          display: 'flex',
          margin: "8rem auto",
          textAlign: "center",
          background: `${secondaryColor}`,
          borderRadius: '20px',

        }}>

        <Grid item xs={12} lg={7} sm={12} md={12}>
          <SecondImgGroup src={group} alt="happy-group" />
        </Grid>
        <Grid container item xs={12} lg={5} sm={12}
        >
          <SecondParagraph >
            <SecondTextTop
            >
              <Typography
                variant="h4"
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  textAlign: "start"
                }}>
                Embrace the Joy of Sharing
              </Typography>
            </SecondTextTop>
            <Typography variant="body1">
              In a world that thrives on individuality, there's something extraordinary about coming together to share a meal. At Eatnan, we celebrate the joy of shared experiences. Our platform is a testament to the belief that the simple act of breaking bread has the power to transcend boundaries and create lasting bonds. As you gather around a table filled with delectable dishes, you're not just satisfying your hunger; you're nourishing your soul through connections that leave an indelible mark. Join us in embracing the beauty of shared moments, one meal at a time.
            </Typography>
          </SecondParagraph>
        </Grid>
      </Grid>

      <Grid container xs={12} sm={11} md={11} lg={12}
        style={{
          margin: "0rem auto 8rem auto",
          textAlign: "center",
          background: `${secondaryColor}`,
          borderRadius: '20px',
        }} >
        <Grid container item xs={12} sm={12} lg={5}>
          <SecondParagraph>
            <SecondTextTop>
              <Typography variant="h4"
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  textAlign: "start"
                }}>The Culinary Connections</Typography>
            </SecondTextTop>
            <Typography variant="body1">
              Food has an incredible way of connecting us. It's a universal language that knows no barriers. With Eatnan, we've harnessed this power to craft not only exquisite culinary experiences but also opportunities for genuine human interactions. Imagine indulging in a dish prepared with passion and sharing stories with newfound friends who were once strangers. Every meal holds the promise of adventure, sparking conversations that traverse cultures and ignite friendships. Step into the world of Eatnan, where every bite paves the way for lasting connections.

            </Typography>
          </SecondParagraph>
        </Grid>
        <Grid item xs={12} lg={7} sm={12} md={12}>
          <SecondImgHands src={hands} alt="close-hands" />
        </Grid>
      </Grid>
    </MainSecond>
  );
};

export default Second;
