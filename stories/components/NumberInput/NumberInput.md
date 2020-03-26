# NumberInput

**Available components**:

- [NumberInput](#numberinput)

**How it is built**

- The input is stateless. It will render the provided value and uses callback to update value on button press / input change via keyboard, etc.

## NumberInput

Takes a value to render inside the input and a callback to update the value in the parent.

### Props

| name     | type     | default | description                                                                                                                                                         |
| -------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title    | string   | ''      | Left hand title text                                                                                                                                                |
| value    | string   |         | Placeholder for input                                                                                                                                               |
| min      | number   | 0       | Min allowed value (disables minus button)                                                                                                                           |
| max      | number   | 99      | Max allowed value (disables max button)                                                                                                                             |
| callback | function |         | A callback that is called for onClick of both buttons or onChange of the input. The only parameter is the new value after adding or subtracting 1 to the old value. |

### Errors

### TODO

### Example

```javascript
const NumberInputs = () => {
  const [value, setValue] = useState("0");

  const setNewValue = newValue => {
    if (newValue >= 0) {
      setValue(newValue);
    }
  };
  return (
    <NumberInput title="Applicants" value={value} callback={setNewValue} />
  );
};
```
