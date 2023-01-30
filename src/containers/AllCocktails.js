import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
  CardMedia,
} from "@mui/material";
import PropTypes from "prop-types";
import ModalBtn from "../components/Modal";

export default function AllCocktails({ cocktails }) {
  return (
    <Grid container spacing={4}>
      {cocktails.map((cocktail) => (
        <Grid item xs={12} sm={6} md={(4, 3)} lg={3} key={cocktail.idDrink}>
          <Card elevation={1} sx={{ maxWidth: 345 }} key={cocktail.idDrink}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {cocktail.strDrink}
                </Typography>
                <Typography variant="body2">
                  Category: {cocktail.strCategory}
                  <br />
                  Served in {cocktail.strGlass}
                </Typography>
              </CardContent>
            </CardActionArea>
            <ModalBtn cocktail={cocktail} />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
AllCocktails.propTypes = {
  cocktails: PropTypes.arrayOf(PropTypes.object).isRequired,
};
