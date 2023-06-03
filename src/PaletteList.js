import React, { Component } from "react";
// import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { Box } from "@mui/material";

const rootStyles = {
  backgroundColor: "blue",
  heigh: "100vh",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
};
const containerStyles = {
  width: "50%",
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  flexWrap: "wrap",
};
const navStyles = {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  color: "#fff",
};
const palettesStyles = {
  boxSizing: "border-box",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(3,30%)",
  gridGap: "5%e",
};

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <Box sx={rootStyles}>
        <Box sx={containerStyles}>
          <nav sx={navStyles}>
            <h1>React Colors</h1>
          </nav>
          <Box sx={palettesStyles}>
            {palettes.map((palette) => (
              <MiniPalette {...palette} key={palette.id} />
            ))}
          </Box>
        </Box>
      </Box>
    );
  }
}
export default PaletteList;

//  <Link to={`/palette/${palette.id}`}>
//    <p>{palette.paletteName}</p>
//  </Link>;
