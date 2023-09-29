import React from 'react'
import { FaAccusoft } from 'react-icons/fa'
import Headphone from '../../assets/icons/Headphone';
import Card from '../../assets/icons/Card';
import ReturnIcon from '../../assets/icons/ReturnIcon';

function Footer() {
  return (
    <div className='flex flex-col bg-gray-300'>
    <div className='flex flex-row items-center'>
    <div className=' flex basis-1/3 items-center justify-center h-56'>
      <Headphone/>
    </div>
  <div  className=' flex basis-1/3 items-center justify-center h-56 '>
    <Card/>
  </div>
  <div  className='flex basis-1/3 items-center justify-center h-56'>
    <ReturnIcon/>
  </div>
    </div>
    <div>02</div>
    <div>03</div>
    </div>
  )
}

export default Footer