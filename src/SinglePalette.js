import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

// Styles
const palette = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
};

const colors = {
  height: "90%",
};

const goBack = {
  width: "20%",
  height: "50%",
  margin: "0 auto",
  display: "inline-block",
  position: "relative",
  cursor: "pointer",
  marginBottom: "-3.5px",
  opacity: "1",
  backgroundColor: "black",
  "& a": {
    color: "white",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "flex",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    textTransform: "uppercase",
    border: "none",
    textDecoration: "none",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "2px",
  },
};

class SinglePalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.getShadesOfColors(
      this.props.palette.colors,
      this.props.colorId
    );
    this.state = { format: "hex" };
    this.changeFormat = this.changeFormat.bind(this);
  }

  getShadesOfColors(allColors, colorsToFilterBy) {
    let shades = [];
    for (let level in allColors) {
      shades = shades.concat(
        allColors[level].filter((color) => color.id === colorsToFilterBy)
      );
    }
    return shades.slice(1);
  }
  changeFormat(format) {
    this.setState({ format });
  }

  render() {
    const { format } = this.state;
    const { paletteName, emoji, id } = this.props.palette;
    const allShades = this._shades.map((shade) => (
      <ColorBox
        background={shade[format]}
        name={shade.name}
        key={shade.hex}
        showFullPallete={false}
      />
    ));
    return (
      <Box sx={palette}>
        <Navbar handleChange={this.changeFormat} showSlider={false} />
        <Box sx={colors}>
          {allShades}
          <Box sx={goBack}>
            <Link to={`/palette/${id}`} className="back-button">
              Go Back
            </Link>
          </Box>
        </Box>

        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </Box>
    );
  }
}
export default SinglePalette;
