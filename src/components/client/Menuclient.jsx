import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
const Menuclient = () => {
    const {cartTotalQuantity} = useSelector((state) => state.storecart);
    const navigate = useNavigate()
  return (
    <>
<Navbar bg="dark" data-bs-theme="dark">
<Container>
<Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
<IconButton size="large"
edge="end"
aria-label="account of current user"
aria-haspopup="true"
color="error"
onClick={()=>{navigate("/cart")}}
>
<ShoppingCartIcon sx={{ fontSize: 40 }}/>
<Badge badgeContent={cartTotalQuantity}

color="success">
</Badge>
</IconButton>
</Container>
      </Navbar>
      </>
  )
}

export default Menuclient