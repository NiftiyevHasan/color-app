import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { Box } from "@mui/material";

// Styles
const palette = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
};

const paletteColors = {
  height: "90%",
};

const paletteFooter = {
  backgroundColor: "white",
  height: "5vh",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  fontWeight: "bold",
};

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }

  changeFormat(format) {
    this.setState({ format });
  }
  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        moreUrl={`/palette/${id}/${color.id}`}
        showFullPallete
      />
    ));
    return (
      <Box sx={palette}>
        <Navbar
          changeLevel={this.changeLevel}
          level={level}
          handleChange={this.changeFormat}
          showSlider
        />

        <Box sx={paletteColors}>{colorBoxes}</Box>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </Box>
    );
  }
}

export default Palette;
