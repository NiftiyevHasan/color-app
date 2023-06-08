import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { Box } from "@mui/material";
import styles from "./styles/PaletteListStyles.js";

class PaletteList extends Component {
  linkToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { palettes } = this.props;
    return (
      <Box sx={styles.root}>
        <Box sx={styles.container}>
          <nav sx={styles.nav}>
            <h1>React Colors</h1>
          </nav>
          <Box sx={styles.palettes}>
            {palettes.map((palette) => (
              <MiniPalette
                {...palette}
                handleClick={() => this.linkToPalette(palette.id)}
                key={palette.id}
              />
            ))}
          </Box>
        </Box>
      </Box>
    );
  }
}
export default PaletteList;
