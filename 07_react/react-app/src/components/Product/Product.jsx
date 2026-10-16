export const Product = ({ title, price }) => (
  <div className="Product">
    <h2 className="Product__title">
      {title}
    </h2>

    <div className="Product__price">
      Price: {price}
    </div>
  </div>
);