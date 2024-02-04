import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Contact = () => {
  const data = useSelector((state) => state)
  let finalData = data.countAll.value
  const cartData = useSelector((state) => state)
  let finalCartData = cartData.addCart.value.length
  return (
    <div className="max-w-container mx-auto">
        <div className="flex justify-between">
        <div className='h-[345px] w-[500px] bg-red-400'>
          <h2 className='text-5xl'>{finalData}</h2>
        </div>
        <div className='h-[345px] w-[500px] bg-green-400'>
          <div className="h-10 w-10 bg-[#FFFFFF] rounded-full">
            <h2 className='flex items-center justify-center h-full w-full text-3xl'>{cartData.addCart && finalCartData}</h2>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Contact