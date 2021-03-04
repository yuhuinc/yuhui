# Dialog

**Available components**:

- [DialogCentreScreen](#DialogCentreScreen)
- [DialogFullScreen](#DialogFullScreen)

**Gotchas**:

- `reakit/Dialog` which this component uses, use css to hide the dialog content (class `"hidden"`). We instead, do not render the dialog content at all if it's hidden. This prevent pesky bugs that happens when components in dialog content relies on data that is only available when the dialog is open.

**How it is built**

- Dialogs are a mainly just a wrapper which is passed a styled child component.

## DialogCentreScreen

Accessible `Dialog` component.
A centred white modal box surrounded by a light-grey coloured background.

### Props

This component uses Reakit at its base. `useDialog` returns a set of states that should be passed to `<DialogFullScreen />` as props. Read more about it at https://reakit.io/docs/dialog/#usedialogstate

| name               | type      | default | description                                         |
| ------------------ | --------- | ------- | --------------------------------------------------- |
| label              | string    |         | Aria-label                                          |
| children           | Component |         | Placeholder for input                               |
| showEscButton      | boolen    | true    | Shows esc button that closes the dialog when true   |
| hideOnEsc          | boolean   | true    | Closes dialog on esc press if true                  |
| hideOnClickOutside | boolean   | true    | Closes dialog on clicking outside of dialog if true |

### Example

```javascript
import { useDialog, DialogCentreScreen, ButtonPrimary } from "@yuhuinc/yuhui";

const Dialog = () => {
  const dialog = useDialog();
  return (
    <div>
      <ButtonPrimary contentKey="demo.Button" onClick={dialog.toggle} />
      <DialogCentreScreen label="Hello" {...dialog}>
        <P contentKey="demo.P" centered />
      </DialogCentreScreen>
    </div>
  );
};
```

## DialogFullScreen

Accessible `Dialog` component.
A light-grey coloured background that takes up the full screen.

### Props

This component uses Reakit at its base. `useDialog` returns a set of states that should be passed to `<DialogFullScreen />` as props. Read more about it at https://reakit.io/docs/dialog/#usedialogstate

| name               | type         | default | description                                                                                                     |
| ------------------ | ------------ | ------- | --------------------------------------------------------------------------------------------------------------- |
| label              | string       |         | Aria-label                                                                                                      |
| children           | Component    |         | Placeholder for input                                                                                           |
| hideOnEsc          | boolean      | true    | Closes dialog on esc press if true                                                                              |
| hideOnClickOutside | boolean      | true    | Closes dialog on clicking outside of dialog if true                                                             |
| showEscButton      | boolen       | true    | Shows esc button that closes the dialog when true                                                               |
| onEscButtonClick   | e => boolean |         | Callback function that gets called on clicking the escape button. Return `false` to prevent dialog from closing |

### Example

```javascript
import { useDialog, DialogFullScreen, ButtonPrimary } from "@yuhuinc/yuhui";

const Dialog = () => {
  const dialog = useDialog();
  return (
    <div>
      <ButtonPrimary contentKey="demo.Button" onClick={dialog.toggle} />
      <DialogFullScreen label="Hello" {...dialog}>
        <P contentKey="demo.P" centered />
      </DialogFullScreen>
    </div>
  );
};
```
