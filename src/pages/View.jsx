import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';

function View() {
  const { id } = useParams()
  console.log(id);
  const [product, setproduct] = useState({})
  const wishlist = useSelector(state => state.wishlistReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
    setproduct(allProducts?.find(item => item.id == id))
  }, [])
  // console.log(wishlist);
  const handleWishlist = (product) => {
    const existingproduct = wishlist?.find(item => item.id == product.id)
    if (existingproduct) {
      alert("Product allready in your Wishlist")
    }
    else {
      dispatch(addToWishlist(product))
    }
  }
  return (
    <div style={{ paddingTop: '100px' }}>
      <Row className='p-5 container align-items-center' >
        <Col className='p-5' lg={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product?.thumbnail} />
          </Card>
        </Col>
        <Col lg={2}></Col>
        <Col className='p-5' lg={6}>
          <span className='lead'>PID:{product?.id}</span>
          <Card.Title>{product?.title}</Card.Title>
          <h1>$ {product?.price}</h1>
          <h3 style={{ textAlign: 'justify' }}>Description: {product?.description}</h3>
          <div>
            <button onClick={() => handleWishlist(product)} className='btn btn-outline-dark'><i class="fa-solid fa-heart fa-beat" style={{ color: '#ff0000' }}></i>  Add to Wishlist</button>
            <button onClick={()=>dispatch(addToCart(product))} className='btn btn-outline-dark' style={{ marginLeft: '50px' }}><i class="fa-solid fa-cart-plus fa-bounce" style={{ color: 'green' }}></i>  Add to Cart</button>

          </div>
        </Col>
      </Row>

    </div>
  )
}

export default View