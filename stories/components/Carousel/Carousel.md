# Carousel

**Available components**:

- [useCarousel](#usecarousel)
- [Carousel](#carousel)

**How it is built**

- No use of external component libraries.
- Use React's `useState` under the hood.

## useCarousel

A React hook that powers the `<Carousel />` component. Takes in an `option` parameter.

### Options

| name       | type    | default | description                                     |
| ---------- | ------- | ------- | ----------------------------------------------- |
| numOfPages | integer |         | **Required.** Number of total (possible) pages. |

### Returned value

The returned value must be spreaded into `<Carousel />` as props.

| name      | type            | default | description                                                |
| --------- | --------------- | ------- | ---------------------------------------------------------- |
| pageIndex | integer         |         | Current page index. Must be passed into `<Carousel />`     |
| goTo      | integer => void |         | A function that sets `pageIndex` to the given index value. |
| back      | () => void      |         | A function that decrements `pageIndex` by 1.               |
| forward   | () => void      |         | A function that increments `pageIndex` by 1.               |
| children  | ReactNode       |         |                                                            |

### Example

```javascript
const carousel = useCarousel({ numOfPages: 2 })

<Carousel {...carousel}>
    <div>
        <p>Page 1</p>
        <button onClick={carousel.forward}>next</button>
    </div>
    <div>
        <p>Page 2</p>
        <button onClick={carousel.back}>back</button>
    </div>
</Carousel>
```

## Carousel

### Props

| name      | type      | default | description        |
| --------- | --------- | ------- | ------------------ |
| children  | ReactNode |         |                    |
| pageIndex | integer   |         | From `useCarousel` |
