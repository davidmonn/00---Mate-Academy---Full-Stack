// import React from 'react'
// import cn from 'classnames';
// import './Product.scss';

export const Product = ({ title, price }) => (
  // <div className={`Product ${price === 0 ? 'Product--free' : 'Product--default'}`}>
  <div className={cn('Product', { 
    'Product--free' : price === 0,
    'Product--default' : price > 0,
     })}>
    <h2 className="Product__title" 
    style={{ 
      color: price === 0 ? 'blue' : 'red',
      backgroundColor: price === 0 ? 'yellow' : '',
      padding: price === 0 ? '10px' : '',
      borderRadius: price === 0 ? '10px' : ''
    }}
    >
      {title}
    </h2>

    <div className="Product__price">
      {`Price: ${price} `}

      {price === 0 && (
        <>
          <span>*</span>
          <span>*</span>    
        </>  
      )}
    </div>
  </div>
);