import React from "react";

import Navigation from "./navigation";
import { Block } from "./components";

export default class App extends React.Component {
  render() {
    return (
      <Block white>
        <Navigation />
      </Block>
    );
  }
}
