import { styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import cards from "./cards-assets/cards.jpg";
import card1 from "./cards-assets/card1.jpg";
import card2 from "./cards-assets/card2.jpg";
import card3 from "./cards-assets/card3.jpg";
import { theme } from "../../../../index";

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
  objectFit: "cover",

  minHeight: "18rem",

});

const CardBody = styled("div")({
  padding: "1rem",
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
        marginBottom: "2rem",
      }}
    >

      <Grid
        className="first-cards-section"
        item container
        sm={12}
        xs={12}
        md={12}
        lg={12}
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: `${secondaryColor}`,
          borderRadius: "20px",
          width: "100%",
          marginBottom: "8rem",
        }}
      >

        {/* Section 1 */}
        <Grid
          className="title"
          item
          xs={12}
          sm={12}
          md={12}
          lg={5}
          sx={{
            backgroundColor: `${secondaryColor}`,
            padding: "1rem",
            width: "100%",
          }}
        >
          <Grid
            item
            container
            sx={{
              textAlign: "center",
              backgroundColor: `${secondaryColor}`,
              alignItems: "center",
            }}
          >
            <Grid
              item
              sx={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                width: "100%",
                minHeight: "10rem",
              }}
            >
              <Typography variant="h5">
                A Table for All, A Taste of Togetherness
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Section 2 */}
        <Grid
          className="image"
          item container
          xs={12}
          sm={12}
          md={12}
          lg={7}
        >
          <CardsImage
            sx={{ maxHeight: "30rem", objectFit: "cover", width: "100%" }}
            src={cards}
            alt="table-together"
          />
        </Grid>
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
