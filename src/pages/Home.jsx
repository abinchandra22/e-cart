import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/productSlice'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Home() {
  const dispatch = useDispatch()
  const { allProducts, loading, error } = useSelector(state => state.productReducer)
  console.log(allProducts);
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  return (
    <div style={{ paddingTop: '100px' }}>
      {
        loading ? <div className='mt-5 text-center'>
          <h1>  Loading <i class="fa-solid fa-spinner fa-spin-pulse"></i></h1>
        </div> :
          <Row className='mt-5 container' style={{ marginLeft: '50px' }}>
            {allProducts?.length > 0 && allProducts?.map((products, index) => (
              <Col key={index} className='mb-5 p-5 container ' sm={12} md={6} lg={3}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" height={'200px'} src={products?.thumbnail} />
                  <Card.Body>
                    <Card.Title>{products?.title.slice(0, 20)}...</Card.Title>
                    <div className='text-center'><Link to={`/view/${products?.id}`} classNam="btn btn-link"> View</Link></div>
                  </Card.Body>
                </Card>
              </Col>

            ))

            }
          </Row>
      }
    </div>
  )
}

export default Home