# FileCollection

**Available components**:

- [FileCollection](#filecollection)

**How it is built**

- uses react-dropzone library

## KEY CONSIDERATIONS WHEN USING COMPONENT

### UploadedFiles prop

UploadedFiles prop is an array that can be passed as a json object. A key of 'keep' is mandatory to be passed in as this is what keeps track of whether or not the file should be kept or removed/deleted. If an uploaded file is removed/deleted through ui, `uploadedFile.keep = false`. If an uploaded file is not removed, `uploadedFile.keep = true`

Example:

```javascript
  {
    name: 'file1.txt',
    src: 'https://www.google.ca',
    file_type: 'text/plain',
    keep: true,
  },
```

### Handling Errors

Error is not handled in the component. This comes from the fact that we are tracking whether or not an uploaded file should be kept or deleted.
Error can be handled by checking if `newFile[].length > 0 || !values.uploadedFiles.every(file => file.keep === false)`

Example

```javascript
const fileCollection = () => {
  const fileCollectionValid = values =>
    values.files.length > 0 || !values.uploadedFiles.every(file => file.keep === false);

  const handleSubmit= (formValues) => {
    if (!fileCollectionValid(values)) {
      return;
    }
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit}>
      <FileCollection
        newFiles={files} // initial empty []
        data={uploadedFiles}
        ...
      />
      {!fileCollectionValid(values) && (
        <div style={{ color: 'red' }}>Please uploaded atleast one file</div>
      )}
    </form>
  )
}

```

## FileCollection

Files can be dragged and dropped or browsed and muli-selected. Files array passed as prop pre-populate in a list.

### Props

| name            | type   | default | description                                                                                                                                         |
| --------------- | ------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| data            | array  |         | Array of existing/default files as json object passed to pre populate.                                                                              |
| newFiles        | array  |         | Pass value of an empty array you want to store uploading files in.                                                                                  |
| onChange        | any    |         | An optional callback that is called for all inputs individually. Parameter returned is the an array of Files that are currently uploaded or dropped |
| onDropVerbiage  | string |         | Verbiage for the dropzone when files are dragged on top to be dropped                                                                               |
| dropFileVeriage | string |         | Verbiage for the dropzone when no files are uploaded                                                                                                |
| browseVerbiage  | string |         | Verbiage for click to browse on dropzone                                                                                                            |

### Example

```javascript
const handleChange = (newValues, existingValues) => {
  console.log(newValues);
  console.log(existingValues);
};

const existingFiles = [
  {
    name: "file1.txt",
    src: "https://www.google.ca",
    file_type: "text/plain",
    keep: true
  },
  {
    name: "file1.txt",
    src: "https://www.google.ca",
    file_type: "text/plain",
    keep: true
  }
];

<FileCollection
  newFiles={[]}
  data={existingFiles}
  onChange={handleChange}
  onDropVerbiage="Drop file here"
  dropFileVeriage="Drag and drop files here"
  browseVerbiage="Or browse files"
/>;
```
