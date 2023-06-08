import React from "react";
import styles from "./styles/PaletteFooterStyles.js";
import { Typography } from "@mui/material";

function PaletteFooter(props) {
  const { paletteName, emoji } = props;
  return (
    <Typography sx={styles.paletteFooter}>
      {paletteName}
      <Typography sx={styles.emoji}>{emoji}</Typography>
    </Typography>
  );
}

export default PaletteFooter;
