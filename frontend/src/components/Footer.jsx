import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa alias ducimus cumque consequatur velit repellat ipsa earum, sed aspernatur ipsam.Voluptatum, voluptatibus fugit, tempora provident suscipit debitis praesentium placeat magni, corporis nostrum fuga natus quaerat in excepturi consequuntur! Eligendi, dolore.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-234-567-8910</li>
                <li>contact@foreveryou.com</li>
            </ul>
        </div>

      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright {new Date().getFullYear()}@forever.com  - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer