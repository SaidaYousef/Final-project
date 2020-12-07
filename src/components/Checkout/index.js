import React from 'react';
import {Link} from 'react-router-dom'
import {Form, FormGroup, Label, Input} from 'reactstrap'
import {Container1, Btn, Sdiv1} from './CheckoutElements'
import Navbar from '../Navbar/index'


const Checkout = () => {

  return (
   <Container1>
     <Link to='/Checkout'><Navbar/></Link>
      <Sdiv1>
        <Form className="login-form green" > 
           <h1 class="text-center pb-5">
              Order Information
           </h1>
           <FormGroup>
             <Label>Full Name</Label>
             <br></br>
             <Input type="email" ></Input>
           </FormGroup>
           <FormGroup>
             <Label>Email</Label>
             <br></br>
             <Input type="password" ></Input>
           </FormGroup>
           <FormGroup>
             <Label>Phone number</Label>
             <br></br>
             <Input type="number" ></Input>
           </FormGroup>
           <FormGroup>
             <Label>Address</Label>
             <br></br>
             <Input type="text"></Input>
           </FormGroup>
  <Btn className="btn-large btn-block">Confirm Order {}</Btn>
        </Form>
      </Sdiv1>
   </Container1>
  );
}

export default Checkout;