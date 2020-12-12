import { configure } from "@storybook/react";

import "../src/styles/normalize.css";
import "../src/styles/palette.css";
import "../src/styles/typography.css";
import "../src/styles/vars.css";
import "../src/styles/base.css";
import "../src/styles/animation.css";

// This provides a black background to all the stories.
// We should remove as we move CC to it's new light theme
import "./storybook.css";

// automatically import all files ending in *.stories.js
const req = require.context("../src/components", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
