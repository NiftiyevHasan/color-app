import React, { Component } from "react";
import ColorBox from "./ColorBox";

class SinglePalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.getShadesOfColors(
      this.props.palette.colors,
      this.props.colorId
    );
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
  render() {
    const allShades = this._shades.map((shade) => (
      <ColorBox
        background={shade.hex}
        name={shade.name}
        key={shade.id}
        showLink={false}
      />
    ));
    return (
      <div>
        <h2>Single Palette page</h2>
        <div className="Palette">
          <div className="Palette-colors">{allShades}</div>
        </div>
      </div>
    );
  }
}
export default SinglePalette;
