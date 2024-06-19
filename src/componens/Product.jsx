import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncgetProduct } from '../Actions/ProductActions'

const Product = () => {
  const { products } = useSelector((state) => state.ProductReducer)
  console.log('products', products)
  const dispatch = useDispatch()
  useEffect(() => {
       dispatch(asyncgetProduct());
  }, [])

  return (
    <div>
      <ul className='text-start'>
        {products && products.map((products, index) => {
          return (<li className='text-start' key={products.id}>
            <h1>
              {products.title}
              <span className='text-red-800 pl-3 font-semibold cursor-pointer ' onClick={() => DeleteHandle(index)}> X</span>
            </h1>
          </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Product