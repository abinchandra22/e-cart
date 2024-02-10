import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Cart() {
  const cart = useSelector(state=>state.cartReducer)
  const totalCartAmount = cart?.map(item=>item.totalprice)?.reduce((p1,p2)=>p1+p2)
  return (
    <div style={{ paddingTop: '100px' }}>
    {cart?.length>0? <div className='container pt-5'>
      <h1 className='text-warning'>Cart summary</h1>
      <div className='row'>
        <div className='col-lg-8'>
          <table className='table'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                cart?.map((product,index)=>(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{product?.title}</td>
                    <td><img className='img-fluid' height={'60px'} width={'60px'} src={product?.thumbnail} alt="no img" /></td>
                    <td>
                      <input style={{width:'50px'}} type="text" className='form-control' value={product?.quantity} readOnly />
                    </td>
                    <td>$ {product?.totalprice}</td>
                    <td> <button className='btn btn-link'><i className='fa-solid fa-trash text-danger'></i></button></td>
                  </tr>
                ))
              }
            </tbody>
          </table>

          <div className='float-end mt-3 mb-3'>
            <button className='btn btn-danger me-2'>Empty Cart</button>
            <Link to={'/'} className='btn btn-success me-2 '>Shop More</Link>

          </div>

        </div>
        <div className='col-lg-4'>
          <div className='shadow border rounded p-4'>
            <h5>Total Products : <span className='fw-bolder text-danger'>{cart?.length}</span></h5>
            <h4>Total Amount : <span className='fw-bolder text-danger'>{totalCartAmount}</span></h4>
            <hr />
            <div className='d-grid mt-4'>
              <button className='btn btn-success'>CheckOut</button>
            </div>

          </div>

        </div>
        
      </div>
     </div>:
     <div height={'20rem'}  className='d-flex flex-column justify-content-center align-items-center w-100'>
     <i style={{height:'20px'}} class="fa-solid fa-heart-crack fa-2xl text-danger"></i>            <h1>Your wishlist is empty!!</h1>
               </div>
     }
      </div>
  )
}

export default Cart