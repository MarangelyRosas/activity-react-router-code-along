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

  return (
    <section>
      <h2>All {type}</h2>
      <article className="products">
        <ul>
          {lamps.map((product) => {
            return (
              <li key={product.id}>
                <h4>{product.name}</h4>
                <img src={product.image} alt={product.name} />
              </li>
            );
          })}
          {candles.map((product) => {
            return (
              <li key={product.id}>
                <h4>{product.name}</h4>
                <img src={product.image} alt={product.name} />
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
}
