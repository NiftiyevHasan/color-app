import React, { Component } from "react";
import { Link } from "react-router-dom";

class PaletteList extends Component {
  render() {
    const { palette } = this.props;
    return (
      <div>
        <h1>React Colors</h1>
        {palette.map((palette) => (
          <Link to={`/palette/${palette.id}`}>
            <p>{palette.paletteName}</p>
          </Link>
        ))}
      </div>
    );
  }
}
export default PaletteList;
