# Checkbox

An accessible checkbox

**Available components**:

- [Checkbox](#checkbox)

**How it is built**

- Uses `reakit/Checkbox` ([link](https://reakit.io/docs/checkbox/)) under the hood.
- Wrapped with a label to make the clickable area larger

### Props

| name     | type     | default   | description                                              |
| -------- | -------- | --------- | -------------------------------------------------------- |
| disabled | boolean  | undefined | Disables clicking the checkbox                           |
| checked  | boolean  | undefined | The checkbox's checked state                             |
| toggle   | Function | undefined | A callback that fires onClick                            |
| label    | string   | undefined | Optional label text for the checkbox                     |
| size     | string   | "12px"    | The width and height value E.g. "100%", "1.5rem", "24px" |

### Examples

```javascript
import React, { useState } from "react";
import { Checkbox } from "@yuhuinc/yuhui";

const MyCheckbox = () => {
  const [checked, setChecked] = useState(false);
  const toggle = () => setChecked(!checked);

  return <Checkbox checked={checked} toggle={toggle} />;
};
```
