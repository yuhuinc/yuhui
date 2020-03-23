# InputCollection

**Available components**:

- [InputCollection](#inputcollection)

**How it is built**

- Use React's `useState` under the hood.

## InputCollection

Takes input type and can generate an array of inputs for that type (restricted to 'text' | 'email' | 'number' | 'url'
The name provided is appended with index when outputting value (eg name[0]: "some value")

### Props

| name        | type         | default | description                                                                                                                                                                                                                                                        |
| ----------- | ------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| type        | string       |         | Type of html input                                                                                                                                                                                                                                                 |
| placeholder | string       |         | Placeholder for input                                                                                                                                                                                                                                              |
| addVerbiage | string       |         | Text for add button                                                                                                                                                                                                                                                |
| onChange    | any          |         | An optional callback that is called for all inputs individually. The first parameter is the event and the second parameter is the index of the individual input that is being changed. Third parameter returns the updated collection of values stored as an array |
| name        | string       |         | Name for key of the values                                                                                                                                                                                                                                         |
| errors      | string/array |         | Error verbiages. If an array of errors are passed in, errors attach to the same index of the input collection. If a single string is passed, error will attach to the whole collection                                                                             |

<!-- more description about error shape -->

### Errors

Errors are easiest to use with Yup because the component handles how yup passes error messages.
If custom error validations are required, individual error messages (for each input) can be passed as an array and the index of the error message will correspond to the index of the input of the collection. For the error of the whole collection, pass as a single string.
One limitation is error only displays for individual inputs or the whole collection.

### Example

```javascript
const handleChange = (event, index) => {
  console.log(event, index);
};

const InputCollectionSchema = Yup.object().shape({
  email: Yup.array()
    .required("cannot be empty array")
    .of(Yup.string().required("required"))
});

<InputCollection
  type="text"
  name="email"
  placeholder="Enter email"
  addVerbiage="Add a new email"
  onChange={handleChange}
  errors={errors.email}
/>;
```
