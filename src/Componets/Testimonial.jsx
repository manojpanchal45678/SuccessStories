import React from 'react'
import Card from './Card'
import { BsCaretLeft } from "react-icons/bs";
import { BsCaretRight } from "react-icons/bs";
import { useState } from 'react';

import { FaGem } from "react-icons/fa";
const Testimonial = (props) => {
    let reviews = props.reviews;
    const[index, setIndex] = useState(0);
    function leftHandler() {
       if(index -1 < 0)
       {
        setIndex(reviews.length - 1);
       }
       else{
        setIndex(index - 1);
       }
    }

    function rightHandler() {
         if(index + 1 >= reviews.length)
         {
          setIndex(0);
         } 
         else{
          setIndex(index + 1);
         }
    }

    function surpriceHandler() {
         let randomIndex  = Math.floor(Math.random() * reviews.length);
         setIndex(randomIndex);  
    }

  return (
    <div className='sm:w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 -10 transition-all duration-700 hover:shadow-2xl rounded-xl'>
        <Card review = {reviews[index]}></Card>
        <div className=' flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto'>
            <button onClick={leftHandler} className='text-violet-400  cursor-pointer hover:text-3.5xl hover:text-violet-600  transition-all duration-200'  ><BsCaretLeft/></button>
            <button onClick={rightHandler} className='text-violet-400 cursor-pointer hover:text-3.5xl  hover:text-violet-600  transition-all duration-200'><BsCaretRight/></button>
        </div>
        <div className=''> 
           <button onClick={surpriceHandler} className='bg-violet-500  hover:bg-violet-600 transition-all duration-200 hover:shadow-5xl  cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-3 mb-5'>
           Surprise Me
           </button>
        </div>
    </div>
  )
}

export default Testimonial