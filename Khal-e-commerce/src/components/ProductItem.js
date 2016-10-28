import React, { PropTypes } from 'react'
import Product from './Product'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className='container' style={{ marginBottom: 20 }}>
    <Product
      className='body'
      title={product.title}
      price={product.price}
      image={product.image}/>
    <button
      className='btn btn-warning'
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
    </button>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
