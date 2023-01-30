import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ cocktail }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Show Ingredients</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div id="modal-modal-description" sx={{ mt: 2 }}>
            <b>{cocktail.strDrink}</b><br/>
            <u>Ingredients</u>
            <ul key = {cocktail.idDrink}
            >
              {[1, 2, 3, 4, 5].map(
                (i) =>
                  cocktail[`strIngredient${i}`] &&
                  cocktail[`strMeasure${i}`] && (
                    <li key={`${cocktail.idDrink}-${i}`}>
                      {cocktail[`strMeasure${i}`]} -{" "}
                      {cocktail[`strIngredient${i}`]}
                    </li>
                  )
              )}
            </ul>
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <u>Instructions:</u>
            <br /> {cocktail.strInstructions}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}