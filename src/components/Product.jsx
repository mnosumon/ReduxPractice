import React from 'react'
import ArrivalsProduct1 from '../../src/assets/image/images1.png'
import ArrivalsProduct2 from '../../src/assets/image/images1.png'
import ArrivalsProduct3 from '../../src/assets/image/images1.png'
import ArrivalsProduct4 from '../../src/assets/image/images1.png'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addDtatCart } from '../slice/addToCart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
  const dispatch = useDispatch()

  let Product = [
    {
      id: 0,
      productName: "Basic Crew Neck Tee",
      productImage: ArrivalsProduct1,
      productPrice: 44.00,
    },
    {
      id: 1,
      productName: "Basic Tee",
      productImage: ArrivalsProduct2,
      productPrice: 64.00,
    },
    {
      id: 2,
      productName: "ck Tee",
      productImage: ArrivalsProduct3,
      productPrice: 60.00,
    },
    {
      id: 3,
      productName: "Basic",
      productImage: ArrivalsProduct4,
      productPrice: 84.00,
    },
    {
      id: 4,
      productName: "Tee",
      productImage: ArrivalsProduct4,
      productPrice: 72.00,
    },
  ]

  let handleId = (item)=>{
    dispatch(addDtatCart(item))
    toast("Add successfully");
  }

  return (
    <>
        <div className="max-w-container mx-auto">
        <ToastContainer
        position="bottom-right"
        autoClose={1000} />
            <div className="flex gap-5">
                {
                    Product.map((item, index)=>(
                        <div className="h-36 w-36 bg-amber-500">
                        <h2>{item.productName}</h2>
                        <h2>{item.productPrice}</h2>
                        <h2>{item.id}</h2>
                        <Link onClick={()=>handleId(item)} className='inline-block p-5 bg-emerald-600'>add to cart</Link>
                    </div>
                    
                ))
                }
            </div>
        </div>
    </>
  )
}

export default Product