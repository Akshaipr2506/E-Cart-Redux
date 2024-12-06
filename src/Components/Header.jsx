import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'




function Header() {
  const [show, setShow]= useState(false)

  const wishlistArray=useSelector((state)=>state.wishlist)
  const cartList= useSelector((state)=>(state.cartItem))

  return (
    <>
       <nav className='bg-violet-800 p-5  w-full' >
            <div className='md:flex item-center md:px-10 px-5'>
              <div className='flex w-full'>
                <Link to={'/'}><h1 className='text-4xl text-white text-center'><FontAwesomeIcon icon={faCartShopping} style={{color: "#fafafa",}} /> E-Cart</h1></Link>

                <button onClick={()=>setShow(!show)} className='border border-white p-3 text-white ms-auto rounded md:hidden'><FontAwesomeIcon icon={faBars} /></button>
              </div>

              {show &&  <ul className='flex mt-5 md:hidden'>
                  <Link to={'/cart'}><li><button className='rounded border-2 text-white p-3 hover:bg-white hover:text-violet-800 flex'><FontAwesomeIcon className='me-2' icon={faCartShopping} size="sm" style={{color: "#1fd65c",}} />Cart <span className='border bg-white px-1 rounded text-black ms-2 '>{cartList.length}</span></button></li></Link>

                  <Link to={'/wishlist'}><li><button className='rounded border-2 p-3 ms-3 text-white  hover:bg-white hover:text-violet-800 flex'><FontAwesomeIcon className='me-2' icon={faHeart} size="sm" style={{color: "#ea1a2f",}} />Wishlist <span className='border bg-white px-1 rounded text-black ms-2 '>{wishlistArray.length}</span></button></li></Link>
              </ul>

              }

              <ul className='ms-auto md:flex hidden'>
                  <Link to={'/cart'}><li><button className='rounded border-2 text-white p-3 hover:bg-white hover:text-violet-800 flex'><FontAwesomeIcon className='me-2 mt-1' icon={faCartShopping} size="sm" style={{color: "#1fd65c",}} />Cart <span className='border bg-white px-1 rounded text-black ms-2 '>{cartList.length}</span></button></li></Link>

                  <Link to={'/wishlist'}><li><button className='rounded border-2 p-3 ms-3 text-white  hover:bg-white hover:text-violet-800 flex'><FontAwesomeIcon className='me-2 mt-1' icon={faHeart} size="sm" style={{color: "#ea1a2f",}} />Wishlist <span className='border bg-white px-1 rounded text-black ms-2 '>{wishlistArray.length}</span></button></li></Link>
              </ul>
            </div>
        </nav> 
    </>
  )
}

export default Header