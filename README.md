# YuhUI

## Goals

Accessible React components

- Support for translations is upfront
- Follow web accessibility standards

## Getting started

### Using the package

```shell
$ npm install @yuhu-inc/yuhui # or
$ yarn add @yuhu-inc/yuhui
```

### Developing

```shell
$ yarn storybook
```

### Running tests

```shell
$ yarn watch
```

### Publishing

```
$ yarn publish --access public
```

## Basics

The component library relies on a component called `<ContentProvider />` to provide content (copy and styles) to its children components.

### Example

Create an object with `contentNodes` and `theme` as keys. `contentNodes` is an object with its key being the name of the "content piece" that can be referenced in other components. Its value is includes translated copies. The `theme` API is still quite unstable and can be updated with breaking changes often.

```jsx
const content = {
  contentNodes: {
    nodeName: {
      copy: {
        en: "an example",
        fr: "un exemple"
      }
    }
  },
  theme: {
    /* stuff */
  }
};
```

Pass the `content` object into the `ContentProvider` as a prop.

```jsx
import { ContentProvider } from "@yuhuinc/yuhui";

const Example = ({ children }) => (
  <ContentProvider content={content} lang="en">
    {children}
  </ContentProvider>
);
```

Then you can reference the key name of the content node in components.

```jsx
import { P } from "@yuhuinc/yuhui";

const App = () => (
  <Example>
    <P>You can still do this, but what's below instead:</P>
    <P key="nodeName" />
  </Example>
);
```

## Resources

- [A11Y Style Guide](https://a11y-style-guide.com/style-guide/)
- [Reakit](https://reakit.io/)
