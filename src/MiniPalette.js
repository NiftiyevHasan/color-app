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
  backgroundColor: "#dae1e4",
  height: "150px",
  width: "100%",
  borderRadius: "5px",
  overflow: "hidden",
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

const miniColorStyles = {
  height: "25%",
  width: "20%",
  display: "inline-block",
  margin: "0 auto",
  position: "relative",
  marginBottom: "-3.5px",
};

function MiniPalette(props) {
  const { paletteName, emoji, colors } = props;
  const miniColorBoxes = colors.map((color) => (
    <Box
      sx={miniColorStyles}
      style={{ backgroundColor: color.color }}
      key={color.name}
    ></Box>
  ));
  return (
    <Box sx={rootStyles} onClick={props.handleClick}>
      <Box sx={colorsStyles}>{miniColorBoxes}</Box>
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
