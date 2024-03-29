import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Components/Page/Cart'
import ProductsList from '../Components/Page/Productlisting'
import OrderSuccessfull from '../Components/All_smalle_Components/OrderSuccessfull'
import SingleProductPage from '../Components/All_smalle_Components/SingleProductPage'
import Orderpage from '../Components/Page/Orderpage'


const AllRoutes = () => {


  return (
    <div>

      <Routes>



        <Route path='/'
          element={<ProductsList />} />



        <Route path='/products/:id' element={

          <SingleProductPage />

        } />

        <Route path='/cart'
          element={<Cart />} />


        <Route path='/OrderSuccessfull'
          element={<OrderSuccessfull />} />

        <Route path='/customerDetails' element={<Orderpage/>} />

      </Routes>

    </div>
  )
}

export default AllRoutes
