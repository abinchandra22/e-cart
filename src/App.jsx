import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import View from './pages/View'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/wishlist' element={<Wishlist />}> </Route>
        <Route path='/cart' element={<Cart />}> </Route>
        {/* :id is used for getting the details of product */}
        <Route path='/view/:id' element={<View />}> </Route>
        {/* used to redirect when unwanted page use */}
        <Route path='/*' element={<Navigate to={'/'} />}> </Route>

      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
