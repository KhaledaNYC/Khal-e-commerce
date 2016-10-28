import Cart from './components/Cart'
import React from 'react';
import NavBar from './components/NavBar';
import { Link } from 'react-router';
import ProductsContainer from './ProductsContainer'
export default (props) => {
    return (
      <div>
    < NavBar  title="A Basket Factory" url="/" />
        <div className='root'>
      <ProductsContainer/>
          { props.children }
        </div>

      </div>
    )
};
