import React, { PropTypes } from 'react'

const Product = ({ price, quantity, title, image }) => (
  <div className='container'>
    <img src={image}/><br/>
    {title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string
}

export default Product
