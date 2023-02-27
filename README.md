# Adding React Router DOM to a React App

## Getting Started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow along to complete the build.

## Set Up React Router DOM

When you start this project, all the different components are visible on one page. Let's use React Router to create different views.

Here are the different views we are going to create:

<details><summary>Welcome</summary>

![Welcome view](./assets/welcome-view.png)

</details>

<details><summary>About</summary>

![about view](./assets/about-view.png)

</details>

<details><summary>Candles</summary>

![candles view](./assets/candles-view.png)

</details>

<details><summary>Lamps</summary>

![lamps view](./assets/lamps-view.png)

</details>

<details><summary>One Lamp (Show)</summary>

![show view](./assets/show-view.png)

</details>

1. `npm install react-router-dom`

Import React Router DOM

**src/App.js**

```js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
```

Wrap your app in Router. This will pass down all the router functionality to the components inside.

```js
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="wrapper">
          <Nav />
          <main>
            <Home />
            <About />
            <Newsletter />
            <ProductList products={allProducts} type={"Lamps and Candles"} />
          </main>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
```

Next, let's define the area that will display the views. We are going to be swapping out the content inside the `main` tag, depending on the URL.

**NOTE** Your app will break and not work until you complete the next step

**src/App.js**

```js
<main>
  <Routes>
    <Home />
    <About />
    <Newsletter />
    <ProductList products={allProducts} type={"Lamps and Candles"} />
  </Routes>
</main>
```

## Make Separate Views For Pages

We'll use the `Route` component that will wrap around the views we want to create. We'll pass in our components as `element` props. `element` is a keyword that belonds to react router. Additonally, we have to specifiy the `path`, so that when the URL matches, the view we've created will be visible.

This is an empty route component:

```js
    <Route path="" element={} />
```

The paths:

```js
    <Route path="/" element={} />
    <Route path="/about" element={} />
    <Route path="/newsletter" element={} />
    <Route path="/products" element={} />
```

All together, with the components

```js
<main>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/newsletter" element={<Newsletter />} />
    <Route
      path="/products"
      element={
        <ProductList products={allProducts} type={"Lamps and Candles"} />
      }
    />
  </Routes>
</main>
```

Now, only our welcome page is visible.

But if we type into the url http://localhost:3000/about

We can also now use the forward and back buttons in the browser.

We should now see the about view. This is great progress! But asking our users to type into the URL is not a great user experience.

Let's create some navigation.

## Make Functional Navigation

Have the `h1` take us to the `home` view

**src/components/common/header.js**
Import the link component

```js
import { Link } from "react-router-dom";
```

`Link` is React Router's version of an anchor `a` tag. You should only use `Link` tags when navigating inside a React app with Router, otherwise you won't get the functionality of router.

```js
export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1>I Love Light</h1>
      </Link>
    </header>
  );
}
```

Now, when we click on the `h1` it takes us back to the home view.

Let's add some more links in the `footer`

**src/components/common/footer.js**

```js
import { Link } from "react-router-dom";
```

```js
<footer>
  <p>I Love Light. All Rights Reserved {year}</p>
  <ul>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/newsletter">Newsletter</Link>
    </li>
  </ul>
</footer>
```

Let's be able to see all the candles and lamps by using the navigation bar.

**src/components/common/nav.js**

```js
import { Link } from "react-router-dom";
```

```js
<nav>
  <div>
    <Link to="/products/lamps">
      <h3>Lamps</h3>
    </Link>

    <Link to="/products/candles">
      <h3>Candles</h3>
    </Link>
  </div>
</nav>
```

## Setup Nested Routes

In `App.js`, let's update our `/products` route so that it matches both `/products/candles` and `/products/lamps`.

```
<Route
  path="/products/*"
  element={<ProductList products={allProducts} type="Lamps and Candles" />}
/>
```

The `*` in the path prop is a wildcard that will match any URL, as long as it begins with `/products`.

Now, inside `ProductList.js`, we can create additional routing logic.
