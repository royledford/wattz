import React from "react";

import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import Button from "./Button";

const stories = storiesOf("Atoms", module);

stories
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add("Button", () => {
    const label = text("label", "Button");

    return (
      <div style={{ width: 200 }}>
        <Button>{label}</Button>
      </div>
    );
  });
