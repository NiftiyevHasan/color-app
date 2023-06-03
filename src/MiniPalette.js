import React from "react";
import { Box } from "@mui/material";

const rootStyles = {
  backgroundColor: "#fff",
  border: "1px solid black",
  borderRadius: "5px",
  padding: "0.5rem",
  position: "relative",
  overflow: "hidden",
  "&:hover": {
    cursor: "pointer",
  },
};

const colorsStyles = {
  backgroundColor: "grey",
};

const titleStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0",
  color: "black",
  paddingTop: "0.5rem",
  fontSize: "1rem",
  position: "relative",
};

const emojiStyles = {
  marginLeft: "0.5rem",
  fontSize: "1.5rem",
};

function MiniPalette(props) {
  const { paletteName, emoji } = props;

  return (
    <Box sx={rootStyles}>
      <Box sx={colorsStyles}></Box>
      <h5>
        <Box component="span" sx={titleStyles}>
          {paletteName}
        </Box>
        <span sx={emojiStyles}>{emoji}</span>
      </h5>
    </Box>
  );
}

export default MiniPalette;
