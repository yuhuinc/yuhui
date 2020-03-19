import React from "react";

export default {
  title: "Welcome",
  component: Introduction
};

export const Introduction = () => (
  <div>
    <h1>YuhUI</h1>
    <h2>Goals</h2>
    <p>Accessible React components</p>
    <ul>
      <li>Force translations for copy</li>
      <li>Follow web accessibility standards as much as possible</li>
    </ul>
    <h2>Viewing this storybook</h2>
    <ul>
      <li>For usage examples, click "Canvas" on the top left corner.</li>
      <li>For documentation, click "Notes" on the top left corner.</li>
    </ul>
    <h2>Resources</h2>
    <ul>
      <li>
        <a href="https://a11y-style-guide.com/style-guide/">A11Y Style Guide</a>
      </li>
      <li>
        <a href="https://reakit.io/">Reakit</a>
      </li>
    </ul>
  </div>
);

Introduction.story = {
  name: "Introduction"
};
