# Checkbox

An accessible checkbox

**Available components**:

- [Checkbox](#checkbox)

**How it is built**

- Uses `reakit/Checkbox` ([link](https://reakit.io/docs/checkbox/)) under the hood.
- Wrapped with a label to make the clickable area larger

### Props

| name     | type     | default   | description                    |
| -------- | -------- | --------- | ------------------------------ |
| disabled | boolean  | undefined | Disables clicking the checkbox |
| checked  | boolean  | undefined | The checkbox's checked state   |
| toggle   | Function |           | A callback that fires onClick  |

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
