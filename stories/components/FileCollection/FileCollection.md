# FileCollection

**Available components**:

- [FileCollection](#filecollection)

**How it is built**

- uses react-dropzone library

## FileCollection

Files can be dragged and dropped or browsed and muli-selected. Files array passed as prop pre-populate in a list.

### Props

| name            | type   | default | description                                                                                                                                         |
| --------------- | ------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| data            | array  |         | Array of Javascript Files                                                                                                                           |
| onChange        | any    |         | An optional callback that is called for all inputs individually. Parameter returned is the an array of Files that are currently uploaded or dropped |
| onDropVerbiage  | string |         | Verbiage for the dropzone when files are dragged on top to be dropped                                                                               |
| dropFileVeriage | string |         | Verbiage for the dropzone when no files are uploaded                                                                                                |
| browseVerbiage  | string |         | Verbiage for click to browse on dropzone                                                                                                            |
| errors          | string |         | Error verbiages. A single string will attach to the whole collection                                                                                |

### Errors

Errors are easiest to use with Yup because the component handles how yup passes error messages.
For the error of the whole collection, pass as a single string.

### Example

```javascript
const handleChange = (event, index) => {
  console.log(event, index);
};

const InputCollectionSchema = Yup.object().shape({
  email: Yup.array().required("cannot be empty array")
});

const files = [
  new File(["blob"], "some_file1.txt", {
    type: "text/plain"
  }),
  new File(["blob"], "some_file2.txt", {
    type: "text/plain"
  })
];

<FileCollection
  data={files}
  onChange={handleChange}
  onDropVerbiage="Drop file here"
  dropFileVeriage="Drag and drop files here"
  browseVerbiage="Or browse files"
  errors={errors.files}
/>;
```
