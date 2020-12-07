import React from 'react';
import { Nav, NavLink, NavIcon, Bars,Counter } from './NavbarElements';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

const Navbar = (props) => {
  const Cart = useSelector(state => state.changein)

 
  return (
    <>
      <Nav>
        <NavLink to='/'>Mezzanotte</NavLink>
        <NavIcon onClick={props.toggle}>
         <Link to='/Cart'> <Bars style={{color:'white'}} data-text={Cart.length}/></Link>
          <Counter>{Cart.length}</Counter>
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;