import React from 'react'
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
const Card = (props) => {
    let review = props.review;
  return (
    <div className='flex flex-col md:relative'>
        <div className='absolute 
       top-[200px] sm:top-[-7rem] z-[10] mx-auto '>
            <img className='aspect-square rounded-full sm:w-[140px] sm:h-[140px] w-[100px] h-[100px] z-[25]'
            src={review.image} />
            <div className='sm:w-[140px] sm:h-[140px] w-[100px] h-[100px] bg-violet-700 rounded-full absolute top-[-6px] z-[-10] left-[8px]'>
            </div>
        </div>
        <div className='text-center mt-7'>
       <p className='font-bold text-2xl capitalize'>{review.name}</p>
       <p className='text-violet-400 font-bold text-sm'>{review.job}</p>
       </div>
        <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteLeft/>
        </div> 
        <div className='text-center mt-4 text-slate-500'>
            {review.text}
        </div>
        <div className='text-violet-400 mx-auto mt-5'>
        <FaQuoteRight/>
        </div>
    </div>
  )
}
export default Card