import React from 'react'
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import userFetch from '../Hooks/useFetch'
import { addWishlistItems } from '../Redux/slices/wishlistSlice'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../Redux/slices/cartSlice'

function Home() {

  const data = userFetch('https://fakestoreapi.com/products')
  console.log(data);

  const dispatch=useDispatch()


  return (
    <>
      <div className="pt-32 px-10 mb-10 md:grid grid-cols-4">
        {data?.length > 0 && data?.map((item) => (
          <div className="p-2 ">
            <div className="p-3 rounded shadow-lg">
              <img src={item.image} className='w-full h-60' alt="" />
              <h4 className='text-center text-3xl'>{item.title.slice(0,18)}</h4>
              <p className='text-justify pt-5'>{item.description.slice(0,100)}</p>
              <p className='text-xl p-3'>Price <span className='text-violet-800'>$ {item.price}</span></p>
              <div className='flex justify-between'>
                <button onClick={()=>dispatch(addWishlistItems(item))} className='px-5 py-3 rounded text-white bg-red-600   hover:text-red-600 hover:bg-white hover:border border-red-600 '  ><FontAwesomeIcon icon={faHeart} /></button>
                <button onClick={()=>dispatch(addItemToCart(item))} className='px-5 py-3 rounded text-white bg-green-600  hover:text-green-600 hover:bg-white hover:border border-green-600'><FontAwesomeIcon icon={faCartShopping} /></button>
              </div>
            </div>
          </div>
        ))}


      </div>
    </>
  )
}

export default Home