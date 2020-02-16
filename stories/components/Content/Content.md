# Content

Functions exported from `Content.tsx` is in large part what makes this component library what it is. Many of the components in this library is wrapped in `useContent()` which gets its content (copy and styles) from `<ContentProvider />`

**Available components**:

- [ContentProvider](#contentprovider)
- [withContent](#withcontent)
- [Basic text components](#basic-text-components)

**How it is built**

- No use of external component libraries.
- Uses React's `context` under the hood.

## ContentProvider

### Props

| name     | type      | default | description                    |
| -------- | --------- | ------- | ------------------------------ |
| lang     | string    | "en"    | Language code                  |
| content  | Content   |         | **Required.** `Content` object |
| children | ReactNode |         |                                |

### Types

```javascript
interface Content {
  contentNodes: ContentNodes;
  theme: any;
}

interface ContentNodes {
  [key: string]: ContentNode;
}

interface ContentNode {
  copy: Copy;
  style?: any;
  render?: any;
  [key: string]: any;
}
```

### Example

```javascript
const content = {
  contentNodes: {
      {
  "demo.Button": {
    copy: {
      en: "Switch to English",
      fr: "Passer à l'anglais"
    }
  }
};
  },
  theme: {
    colors: {
      primary: {
        light: "#d0dbfd",
        dark: "#230cc2"
      }
    }
  }
};

...

<ContentProvider lang="en" content={content}>
    ...
</ContentProvider>
```

## withContent

A higher-order component which adds the following props.

### Props

| name       | type            | default | description                                                                  |
| ---------- | --------------- | ------- | ---------------------------------------------------------------------------- |
| contentKey | string          |         | **Required.** Name of the corresponding key in `contentNodes` from `Content` |
| style      | Style           |         | Style object. Overwrites styles for the root element.                        |
| render     | () => ReactNode |         | A render prop that exposes `content` and `lang`.                             |
| children   | ReactNode       |         | An escape hatch for rendering content that is not part of `Content`.         |

### Examples

```javascript
const H1 = withContent(({children, ...rest}) => <h1 {...rest}>{children}</h1>);


// Below will render copy from content.contentNodes['demo.Button']
<H1 contentKey="demo.Button" />

// You can have more control with the render prop
<H1
    render={({content, lang}) => `${content[lang]} !!`}
/>
```

## Basic Text Components

Basic text components are all wrapped with `withContent`

- `H1`
- `H2`
- `P`
- `Span`
