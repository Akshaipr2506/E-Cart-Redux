import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
        <div className='bg-violet-800 py-10 md:px-20 px-10 md:grid grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)] text-white' style={{width:'100%'}}>
          <div>
            <h1 className='text-4xl text-white me-3'><FontAwesomeIcon icon={faCartShopping} style={{color: "#fafafa",}} /> E-Cart</h1>
            <p className='text-justify mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolore, esse ipsa, tempora praesentium officia sint repellendus rem itaque, accusantium aperiam. Praesentium nobis harum porro reprehenderit nesciunt! Natus, fuga vitae.</p>
          </div>
          <div className='md:flex justify-center mt-10 md:mt-0'>
            <div>
              <h3 className='text-4xl'>Links</h3>
              <Link to={'/'}><p className='mt-6'>Home</p></Link>
              <Link to={'/cart'}><p className='mt-3'>Cart</p></Link>
              <Link to={'/wishlist'}><p className='mt-3'>Wishlist</p></Link>
            </div>
          </div>
          <div className='md:flex justify-center mt-10 md:mt-0'>
            <div >
              <h3 className='text-4xl'>Guides</h3>
              <p className='mt-6'>React</p>
              <p className='mt-3'>React Bootstrap</p>
              <p className='mt-3'>BootsWatch</p>
            </div>
          </div>
          <div className='md:px-10 mt-10 md:mt-5'>
            <h3 className='text-4xl'>Contact Us</h3>
            <div className='flex mt-6'>
              <input type="text" placeholder='Email id' className='p-3 rounded w-full' />
              <button className='rounded bg-orange-500 p-3 ms-3'>Subscribe</button>
            </div>
            <div className='flex justify-between mt-6'>
              <FontAwesomeIcon icon={faTwitter} className='text-3xl'/>
              <FontAwesomeIcon icon={faFacebook} className='text-3xl' />
              <FontAwesomeIcon icon={faInstagram} className='text-3xl' />
              <FontAwesomeIcon icon={faLinkedin} className='text-3xl'/>
            </div>
          </div>
        </div>
    </>
  )
}

export default Footer