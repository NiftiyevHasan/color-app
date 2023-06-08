import React from "react";
import { Box } from "@mui/material";
import styles from "./styles/MiniPaletteStyles.js";

function MiniPalette(props) {
  const { paletteName, emoji, colors } = props;
  const miniColorBoxes = colors.map((color) => (
    <Box
      sx={styles.miniColor}
      style={{ backgroundColor: color.color }}
      key={color.name}
    ></Box>
  ));
  return (
    <Box sx={styles.root} onClick={props.handleClick}>
      <Box sx={styles.colors}>{miniColorBoxes}</Box>
      <h5>
        <Box component="span" sx={styles.title}>
          {paletteName} <span sx={styles.emoji}>{emoji}</span>
        </Box>
      </h5>
    </Box>
  );
}

export default MiniPalette;
