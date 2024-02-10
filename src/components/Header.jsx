import React, { useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const wishlist=useSelector(state=>state.wishlistReducer)
  const cart= useSelector(state=>state.cartReducer)
//   const [wishlistcount,setwishlistcount]=useState(0)
//   useEffect(()=>{
// setwishlistcount(wishlist?.length)
//   },[wishlist])
  return (
    <div>
      <Navbar style={{ zIndex: '1' }} expand="lg" className="bg-info w-100 position-fixed">
        <Container>

          <Navbar.Brand ><Link to={'/'} style={{ textDecoration: 'none', color: 'white' }} className='fw-bolder'><h1> <i class="fa-solid fa-truck me-2" ></i> <b><span style={{ color: 'red' }}>D</span>aily-<span style={{ color: 'red' }}>C</span>art</b></h1></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ marginLeft: '700px' }}>
              <Nav.Link ><Link to={'/wishlist'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-solid fa-heart text-danger"></i> Wishlist  <Badge className='bd-dark'>{wishlist?.length}</Badge></Link></Nav.Link>
              <Nav.Link  > <Link to={'/cart'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-solid fa-cart-shopping" style={{ color: 'yellow' }}></i>Cart <Badge className='bd-dark'>{cart?.length}</Badge></Link></Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header