import { styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import cards from "./cards-assets/cards.jpg";
import card1 from "./cards-assets/card1.jpg";
import card2 from "./cards-assets/card2.jpg";
import card3 from "./cards-assets/card3.jpg";
import { theme } from "../../../../index";

const MainCards = styled("div")({
  display: "flex",
  flexDirection: "column",
  padding: "0rem 1rem 2rem 0rem",
  borderRadius: "var(--border-radius-primary)",
});

// const CardsHero = styled("div")({
//   display: "flex",
//   justifyContent: "space-between",
//   borderRadius: "var(--border-radius-primary)",
//   margin: "3rem 0rem",
//   paddingLeft: "1rem",
//   backgroundColor: "var(--color-secondary)",
// });

const CardsTitle = styled("div")({
  display: "flex",
  alignItems: "center",
  textAlign: "center",
});

const CardsImage = styled("img")({
  width: "100%",
  borderTopRightRadius: "20px",
  borderBottomRightRadius: "20px",
  "@media (max-width: 1198px)": {
    borderRadius: '0px 0px 20px 20px ',
  },
});
const CardImage = styled("img")({
  borderRadius: "15px 15px 0 0",
});

const Card = styled("div")({
  margin: "0.5rem",
  backgroundColor: "var(--color-secondary)",
  borderRadius: "var(--border-radius-secondary)",
});

const CardBody = styled("div")({
  padding: "0.5rem",
});

const Cards = () => {
  const secondaryColor = theme.palette.secondary.main;

  return (
    <Grid
      container
      sm={11}
      md={11}
      lg={12}
      xs={12}
      sx={{
        margin: "auto",
        textAlign: "center",
        width: "100%",
        padding: "16px",
        marginBottom:"2rem",
      }}
    >
<Grid item xs={12} sm={5} md={5} lg={5}  sx={{ backgroundColor: `${secondaryColor}`,
  borderRadius:"20px",
}} >
  <Grid item container
    sx={{
      textAlign: "center",
      backgroundColor: `${secondaryColor}`,
      display: "inline-flex",
      flexDirection: "column", // Make the title and image stack vertically
      alignItems: "center", // Center the content horizontally
    }}
  >
    <CardsTitle>
      <Typography variant="h5">
        A Table for All, A Taste of Togetherness
      </Typography>
    </CardsTitle>
  </Grid>
</Grid>
<Grid item xs={12} sm={7} md={7} lg={7}>
  <CardsImage
    sx={{ maxHeight: "30rem", objectFit: "cover" }}
    src={cards}
    alt="table-together"
  />
</Grid>


      <Grid item container spacing={2}>
        <Grid item sm={4} md={4} lg={4}>
          <Grid>
            <CardImage sx={{ width: "100%" }} src={card1} alt="card-01" />
            <CardBody>
              <Typography variant="body1">
                At Eatnan, we've set a table where everyone is welcome. Our
                vision is to break the barriers that often separate us and
                replace them with the bonds formed over a delicious meal.
              </Typography>
            </CardBody>
          </Grid>
        </Grid>
        <Grid item xs={4} sm={4}>
          <Card>
            <CardImage sx={{ width: "100%" }} src={card2} alt="card-02" />
            <CardBody>
              <Typography variant="body1">
                Whether you're a chef extraordinaire or someone who simply loves
                to savor flavors, Eatnan offers a space to share your creations
                and experiences.
              </Typography>
            </CardBody>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4}>
          <Card>
            <CardImage sx={{ width: "100%" }} src={card3} alt="card-03" />
            <CardBody>
              <Typography variant="body1">
                This is more than an app; it's a movement that celebrates
                diversity, fosters inclusivity, and reminds us of the beauty in
                coming together. Join hands, share dishes, and be a part of a
                community where every taste brings us closer.
              </Typography>
            </CardBody>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Cards;
