import React, { useState } from 'react';
import { Nav, NavLink, NavIcon, Bars,Counter, LoginBtn, SForm } from './NavbarElements';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import Modal from 'react-modal'

const Navbar = (props) => {
  const Cart = useSelector(state => state.changein)


    const [formIsOpen, setformIsOpen] = useState (false);
 
  return (
    <>
      <Nav>
        <NavLink to='/'>Mezzanotte</NavLink>
        <NavIcon>
        <LoginBtn onClick={() => setformIsOpen(true)}>Login</LoginBtn>
        <Modal isOpen={formIsOpen}>
          <SForm>
                <h4 className="text-center">Login</h4>
                <div className="form-group">
                    <input type="email" names="email" className="form-control" placeholder="email"/>
                </div>
                <div className="form-group">
                    <input type="password" names="password" className="form-control" placeholder="password"/>
                </div>
                <div className="form-group">
                    <input type="text" names="phone" className="form-control" placeholder="tel"/>
                </div>
                <button className="btn btn-primary float-right" style={{backgroundColor:"#3f87a6"}}>Login</button>
                <button className="btn btn-danger float-right mr-1" style={{backgroundColor:"#e66465"}}onClick={() => setformIsOpen(false)}>Close</button>
            </SForm>
          </Modal>
         <Link to='/Cart'> <Bars style={{color:'white'}} data-text={Cart.length}/></Link>
          <Counter>{Cart.length}</Counter>
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;