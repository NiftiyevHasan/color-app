import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import styles from "./styles/PaletteStyles.js";

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
      <Box sx={styles.palette}>
        <Navbar handleChange={this.changeFormat} showSlider={false} />
        <Box sx={styles.colors}>
          {allShades}
          <Box sx={styles.goBack}>
            <Link to={`/palette/${id}`}>Go Back</Link>
          </Box>
        </Box>

        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </Box>
    );
  }
}
export default SinglePalette;
