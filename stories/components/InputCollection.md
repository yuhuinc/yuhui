# Carousel

**Available components**:

- [InputCollection](#inputcollection)

**How it is built**

- Use React's `useState` under the hood.

## InputCollection

Takes input type and can generate an array of inputs for that type (restricted to 'text' | 'email' | 'number' | 'url'
The name provided is appended with index when outputting value (eg name[0]: "some value")

### Props

| name        | type   | default | description                |
| ----------- | ------ | ------- | -------------------------- |
| type        | string |         | Type of html input         |
| placeholder | string |         | Placeholder for input      |
| addVerbiage | string |         | Text for add button        |
| onChange    | any    |         | optional onChange handler  |
| name        | string |         | Name for key of the values |

### Example

```javascript
const handleChange = (event, index) => {
  console.log(event, index);
};

<InputCollection
  type="text"
  name="email"
  placeholder="Enter email"
  addVerbiage="Add a new email"
  onChange={handleChange}
/>;
```
