import './App.css'
import reviews from './Data';
import Testimonial from './Componets/Testimonial'
function App() {

  return (
    <div className='flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200'>
        <div className='text-center'>
          <h1 className='md:text-3xl sm:text-4xl font-bold'>Our Success Stories</h1>
          <div className='bg-violet-400 sm:h-[3px] sm:w-[220px] h-[2px] w-[130px] mt-1 rounded-4xl mx-auto'></div>
          <Testimonial reviews={reviews}/>
        </div>
    </div>
  )
}

export default App
