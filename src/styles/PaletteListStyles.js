const root = {
  backgroundColor: "blue",
  heigh: "100vh",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
};
const container = {
  width: "50%",
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  flexWrap: "wrap",
};
const nav = {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  color: "#fff",
};
const palettes = {
  boxSizing: "border-box",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(3,30%)",
  gridGap: "5%",
};

const styles = {
  root,
  container,
  nav,
  palettes,
};

export default styles;
