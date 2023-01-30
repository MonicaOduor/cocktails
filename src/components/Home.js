import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllCocktails from "../containers/AllCocktails";
import { getCocktailsList } from "../redux/actions/cocktailsActions";

const Home = () => {
  const { cocktails } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCocktailsList());
  }, [dispatch]);

  return (
    <>
    <Typography variant="h5"><strong>COCKTAILS</strong></Typography>
      <AllCocktails cocktails={cocktails.cocktails} />
    </>
  );
};

export default Home