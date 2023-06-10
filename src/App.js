import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import PaletteList from "./PaletteList";
import SinglePalette from "./SinglePalette";
import NewPaletteForm from "./NewPaletteForm";

class App extends Component {
  findPalette(id) {
    return seedColors.find((palette) => palette.id === id);
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route
              exact
              path="/palette/new"
              render={(routeProps) => <NewPaletteForm {...routeProps} />}
            />
            <Route
              exact
              path="/"
              render={(routeProps) => (
                <PaletteList palettes={seedColors} {...routeProps} />
              )}
            />
            <Route
              exact
              path="/palette/:id"
              render={(routeProps) => (
                <Palette
                  palette={generatePalette(
                    this.findPalette(routeProps.match.params.id)
                  )}
                />
              )}
            />

            <Route
              exact
              path="/palette/:paletteId/:colorId"
              render={(routeProps) => (
                <SinglePalette
                  colorId={routeProps.match.params.colorId}
                  palette={generatePalette(
                    this.findPalette(routeProps.match.params.paletteId)
                  )}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
