import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { Link } from "react-router-dom";

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
    console.log(shades);
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
        showFullPalette={false}
      />
    ));
    return (
      <div className="SingleColorPalette Palette">
        <Navbar handleChange={this.changeFormat} showSlider={false} />
        <div className="Palette-colors">
          {allShades}
          <div className="go-back ColorBox">
            <Link to={`/palette/${id}`} className="back-button">
              Go Back
            </Link>
          </div>
        </div>

        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}
export default SinglePalette;
