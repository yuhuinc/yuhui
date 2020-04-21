# Dialog

**Available components**:

- [DialogCentreScreen](#DialogCentreScreen)
- [DialogFullScreen](#DialogFullScreen)

**How it is built**

- Dialogs are a mainly just a wrapper which is passed a styled child component.

## DialogCentreScreen

Accessible `Dialog` component.
A centred white modal box surrounded by a light-grey coloured background.

### Props

| name     | type      | default | description             |
| -------- | --------- | ------- | ----------------------- |
| label    | string    |         | Aria-label              |
| children | Component |         | Placeholder for input   |
| dialog   | useDialog |         | Hook from reakit/Dialog |

### Example

```javascript
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

| name     | type      | default | description             |
| -------- | --------- | ------- | ----------------------- |
| label    | string    |         | Aria-label              |
| children | Component |         | Placeholder for input   |
| dialog   | useDialog |         | Hook from reakit/Dialog |

### Example

```javascript
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