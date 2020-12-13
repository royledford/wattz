import React from "react";

import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered/react";
import { withKnobs } from "@storybook/addon-knobs";

import Text from "./Text";

const stories = storiesOf("Atoms", module);

stories
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add("Text", () => {
    const wrapStyle = {
      display: "flex",
      flexDirection: "column",
      marginBottom: 16,
    };

    return (
      <div style={{ display: "flex" }}>
        <div style={wrapStyle}>
          <Text size="small" weight="regular">
            Small
          </Text>
        </div>
      </div>
    );
  });
