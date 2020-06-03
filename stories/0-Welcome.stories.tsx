import React from "react";
import markdown from "../README.md";

export default {
  title: "Welcome",
  component: Introduction
};

export const Introduction = () => (
  <div>
    <h1>YuhUI</h1>
    <a href="/?path=/info/welcome--introduction">
      Click here or "Notes" on the top-left corner.
    </a>
  </div>
);

Introduction.story = {
  name: "Introduction",
  parameters: {
    notes: { markdown }
  }
};
