import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card';
import { removeFromWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';

function Wishlist() {
  //get wishlist from strore
  const wishlist = useSelector(state=>state.wishlistReducer)
  const dispatch=useDispatch()
  // console.log(wishlist);  

// remove from wishlist and add to cart
const handleRemoveWishlist = (product)=>{
  dispatch(removeFromWishlist(product.id))
  dispatch(addToCart(product))
}

  return (
    <div style={{ paddingTop: '100px' }}>
      <div className='container'>
        <Row className='mt-5'>
         { wishlist?.length>0?wishlist?.map((product,index)=>(<Col key={index} style={{marginBottom:'10px'}} sm={12} md={6} lg={4}>
          <Card className='card-shadow' style={{ width: '18rem' }}>
      <Card.Img height={'200px'} variant="top" src={product?.thumbnail}/>
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <div className='d-flex justify-content-between'>
<button onClick={()=>dispatch(removeFromWishlist(product?.id))} className='btn'><i class="fa-solid fa-heart-circle-minus text-danger"></i></button>
<button onClick={()=>handleRemoveWishlist(product)} className='btn'><i class="fa-solid fa-cart-plus text-success"></i></button>

        </div>
        
      </Card.Body>
    </Card>
          </Col>)):
          <div height={'20rem'}  className='d-flex flex-column justify-content-center align-items-center w-100'>
<i style={{height:'20px'}} class="fa-solid fa-heart-crack fa-2xl text-danger"></i>            <h1>Your wishlist is empty!!</h1>
          </div>
         }

        </Row>
      </div>
    </div>
  )
}

export default Wishlist