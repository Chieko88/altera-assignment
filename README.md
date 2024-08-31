# Altera assignment

## Tooling

This project is built using:

- [React], for SPA.
- [Bootstrap], for CSS.
- [FontAwesome], for icons.
- [`jest`] and `testing-library`, for testing.
- <https://picsum.photos>, for random "product" images.
- [Vercel], for deployment and hosting.

This project is hosted at: <https://altera-assignment.vercel.app/>

## Structure

The main page is in `./src/App.js`.
Please start reading the code from there.

The components used to make the overall web application are under
`./src/components`:

- `Header` and `Footer` for the overall structure of the web application,
- `Catalog` for the listing, sorting and filtering of products,
- `Product` for the rendering of each individual product,
- `DarkModeSwitch` for switching from light to dark mode, and vice versa.

The static data for the list of products is under `./public/data/products.json`.

## How to run

- Install all packages required for this application to run:

  ```console
  npm install
  ```

- In another terminal, start the React application:

  ```console
  npm start
  ```

- In your web browser, open: <http://localhost:3000>.

## How to test

There are unit tests for the `Catalog` and `Product` components, see:

- `./src/components/Catalog.test.js`
- `./src/components/Product.test.js`

The tests can be run using the following commands:

```console
npm test
```

[React]: https://react.dev/
[Bootstrap]: https://getbootstrap.com/docs/5.3/
[FontAwesome]: https://fontawesome.com/
[`jest`]: https://jestjs.io/
[Vercel]: https://vercel.com/
