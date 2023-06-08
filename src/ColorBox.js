import React, { Component } from "react";
import { Link } from "react-router-dom";
import CopyToClipboard from "react-copy-to-clipboard";
import { Box, Typography, Button } from "@mui/material";
import styles from "./styles/ColorBoxStyles.js";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false, zIndex: 0 };
    this.handleCopyState = this.handleCopyState.bind(this);
  }

  handleCopyState() {
    this.setState({ copied: true, zIndex: this.maxZIndex++ }, () =>
      setTimeout(() => this.setState({ copied: false }), 1500)
    );
  }

  render() {
    const { name, background, moreUrl, showFullPallete } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.handleCopyState}>
        <Box sx={(theme) => styles.colorBox(theme, this.props)}>
          <Box
            style={{ background }}
            sx={
              copied
                ? { ...styles.copyOverlay, ...styles.showOverlay }
                : styles.copyOverlay
            }
          />
          <Box
            sx={
              copied ? { ...styles.copyMsg, ...styles.showMsg } : styles.copyMsg
            }
          >
            <h1>copied!</h1>
            <Typography sx={(theme) => styles.copyText(theme, this.props)}>
              {background}
            </Typography>
          </Box>
          <Box>
            <Box sx={styles.boxContent}>
              <Typography sx={(theme) => styles.colorName(theme, this.props)}>
                {name}
              </Typography>
            </Box>
            <Button sx={(theme) => styles.copyButton(theme, this.props)}>
              Copy
            </Button>
          </Box>
          {showFullPallete && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
              <Typography sx={(theme) => styles.seeMore(theme, this.props)}>
                MORE
              </Typography>
            </Link>
          )}
        </Box>
      </CopyToClipboard>
    );
  }
}
export default ColorBox;
