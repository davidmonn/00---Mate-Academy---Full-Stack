import React from 'react'
import './Product.scss';

export const Product = ({ title, price }) => (
  <div className="Product">
    <h2 className="Product__title">
      {title}
    </h2>

    <div className="Product__price">
      {`Price: ${price} `}
      {price === 0 && (
        <React.Fragment>
          <span>*</span>
          <span>*</span>    
        </React.Fragment>  
      )}
    </div>
  </div>
);