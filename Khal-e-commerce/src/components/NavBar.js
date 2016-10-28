import React from 'react';

export default function NavBar(props){
  return (

    <nav className='navbar navbar-default'>
      <div className='navbar-header'>
        <a className='navbar-brand' href={props.url}>{props.title}</a>
        <a className='navbar-brand' href={props.url}>{props.title}</a>
      </div>
    </nav>
  )
}
