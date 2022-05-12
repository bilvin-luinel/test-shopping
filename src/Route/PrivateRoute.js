import React from 'react'
import { Navigate } from 'react-router-dom'
import Product from '../page/Product'

const PrivateRoute = ({ authenticate }) => {
    return authenticate == true ? <Product /> : <Navigate to="/login" />
}

export default PrivateRoute