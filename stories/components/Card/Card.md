# Cards

An accessible checkbox

**Available components**:

- [Card](#card)
- [CardWithCheckbox](#cardwithcheckbox)

**How it is built**

## Card

### Props

| name          | type     | default   | description                                        |
| ------------- | -------- | --------- | -------------------------------------------------- |
| disableDelete | boolean  | undefined | Disable the delete button                          |
| disableEdit   | boolean  | undefined | Disable the edit button                            |
| handleDelete  | Function | undefined | Callback that fires after OnClick of delete button |
| handleEdit    | Function | undefined | Callback that fires after OnClick of edit button   |

### Examples

```javascript
import React, { useState } from "react";
import { Card } from "@yuhuinc/yuhui";

const MyCard = () => {
  const handleEdit = () => console.log("edit");
  const handleDelete = () => console.log("delete");

  return (
    <Card handleEdit={handleEdit} handleDelete={handleDelete}>
      <p>My card title</p>
    </Card>
  );
};
```

## CardWithCheckbox

### Props

| name            | type     | default   | description                                        |
| --------------- | -------- | --------- | -------------------------------------------------- |
| disableDelete   | boolean  | undefined | Disable the delete button                          |
| disableEdit     | boolean  | undefined | Disable the edit button                            |
| disableCheckbox | boolean  | undefined | Disable the checkbox                               |
| handleDelete    | Function | undefined | Callback that fires after OnClick of delete button |
| handleEdit      | Function | undefined | Callback that fires after OnClick of edit button   |

Can also take Checkbox props

| name    | type     | default   | description                                              |
| ------- | -------- | --------- | -------------------------------------------------------- |
| checked | boolean  | undefined | The checkbox's checked state                             |
| toggle  | Function | undefined | A callback that fires onClick                            |
| label   | string   | undefined | Optional label text for the checkbox                     |
| size    | string   | "12px"    | The width and height value E.g. "100%", "1.5rem", "24px" |

### Examples

```javascript
import React, { useState } from "react";
import { CardWithCheckbox } from "@yuhuinc/yuhui";

const MyTodoCard = () => {
  const [checked, setChecked] = useState(false);
  const toggle = () => setChecked(!checked);
  const handleEdit = () => console.log("edit");
  const handleDelete = () => console.log("delete");

  return (
    <CardWithCheckbox
      size="18px"
      checked={checked}
      toggle={toggle}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    >
      <p>My card title</p>
    </CardWithCheckbox>
  );
};
```
