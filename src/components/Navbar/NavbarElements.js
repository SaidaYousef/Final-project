import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  margin-top:18px;
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;

export const Counter = styled.h1`
position:absolute;
color:white;
font-size:1.3em;
font-family:sans-serif;
top:5px;
float: right;
    text-align: center;
    border-radius: 50%;
    background-color: green;
    color: white;
    width: 20px;
    height: 20px;
    font-size: 1rem;

`