import React from "react";
import styles from "./styles/PaletteFooterStyles.js";
import { Typography, Box } from "@mui/material";

function PaletteFooter(props) {
  const { paletteName, emoji } = props;
  return (
    <Box sx={styles.paletteFooter}>
      {paletteName}
      <Typography sx={styles.emoji}>{emoji}</Typography>
    </Box>
  );
}

export default PaletteFooter;
