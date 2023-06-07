import React, { Component } from "react";
import "./ColorBox.css";
import { Link } from "react-router-dom";
import CopyToClipboard from "react-copy-to-clipboard";
import chroma from "chroma-js";
import { Box, Typography, Button } from "@mui/material";

// Styles
const colorBox = (theme, props) => ({
  width: "20%",
  height: props.showFullPallete ? "25%" : "50%",
  margin: "0 auto",
  display: "inline-block",
  position: "relative",
  cursor: "pointer",
  marginBottom: "-3.5px",
  "&:hover button": {
    opacity: "1",
  },
});
const copyText = (theme, props) => ({
  color: chroma(props.background).luminance() >= 0.2 ? "black" : "white",
});

const colorName = (theme, props) => ({
  color: chroma(props.background).luminance() <= 0.08 ? "white" : "black",
});

const seeMore = (theme, props) => ({
  color: chroma(props.background).luminance() >= 0.2 ? "black" : "white",
  background: "rgba(255, 255, 255, 0.3)",
  position: "absolute",
  border: "none",
  right: "0px",
  bottom: "0px",
  width: "60px",
  height: "30px",
  textAlign: "center",
  lineHeight: "30px",
  textTransform: "uppercase",
});

const copyButton = (theme, props) => ({
  color: chroma(props.background).luminance() >= 0.2 ? "black" : "white",
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
  opacity: "0",
  borderRadius: "4px",
  "&:hover": {
    opacity: "1",
  },
});

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.handleCopyState = this.handleCopyState.bind(this);
  }

  handleCopyState() {
    this.setState({ copied: true }, () =>
      setTimeout(() => this.setState({ copied: false }), 1500)
    );
  }

  render() {
    const { name, background, moreUrl, showFullPallete } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.handleCopyState}>
        <Box style={{ background }} sx={(theme) => colorBox(theme, this.props)}>
          <div
            style={{ background }}
            className={`copy-overlay ${copied && "show"}`}
          />
          <Box className={`copy-msg ${copied && "show"}`}>
            <h1>copied!</h1>
            <Typography sx={(theme) => copyText(theme, this.props)}>
              {background}
            </Typography>
          </Box>
          <div className="copy-container">
            <div className="box-content">
              <Typography sx={(theme) => colorName(theme, this.props)}>
                {name}
              </Typography>
            </div>
            <Button sx={(theme) => copyButton(theme, this.props)}>Copy</Button>
          </div>
          {showFullPallete && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
              <Typography sx={(theme) => seeMore(theme, this.props)}>
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
