// Rendered when my url looks like : /products OR /products/candles OR /products/lamps

import { Routes, Route, Navigate} from  "react-router-dom";

export default function ProductList({ products, type }) {
  const [lamps, candles] = products.reduce(
    ([lamps, candles], product) => {
      if (product.category === "lamp") {
        return [[...lamps, product], candles];
      } else {
        return [lamps, [...candles, product]];
      }
    },
    [[], []]
  );

const lampsList = lamps.map((product) => {
  return (
    <li key={product.id}>
      <h4>{product.name}</h4>
      <img src={product.image} alt={product.name} />
    </li>
  );
});

const candlesList = candles.map((product) => {
  return (
    <li key={product.id}>
      <h4>{product.name}</h4>
      <img src={product.image} alt={product.name} />
    </li>
  );
});

  return (
    <section>
      <h2>All {type}</h2>
      <article className="products">
        <ul>
          {/* {lamps.map((product) => {
            return (
              <li key={product.id}>
                <h4>{product.name}</h4>
                <img src={product.image} alt={product.name} />
              </li>
            );
          })} */}

        {/* path="/products/candles" path="/candles" path="candles" */}
        <Routes>
          <Route path="candles" element={<>{candlesList}</>} /> {" "} {/* FOR CANDLES */}
          <Route path="lamps" element={<>{lampsList}</>} /> {" "} {/* FOR LAMPS */}
          {/* How can we re-direct users from /products TO /products/lamps??? */}
          <Route path="/" element={<Navigate to="/products/lamps" />} />
        </Routes>
        </ul>
      </article>
    </section>
  );
}
