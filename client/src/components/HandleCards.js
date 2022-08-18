import React from 'react'

function HandleCards() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
      <div className='rounded-xl relative'>
         <div className='absolute w-full h-full bg-black/50 text-white rounded-xl'>
            <p className='text-2xl font-bold px-2 py-4'>Sun's Out, BOGO's Out </p>
            <p className='px-2'>Troght bizik</p>
            <button className=' border-white bg-white text-black absolute bottom-4 mx-2'>Order Now</button>
         </div>
         <img 
            className='max-h-[180px] md:max-h-[220px] w-full object-cover rounded-xl'
            src="https://images.pexels.com/photos/954677/pexels-photo-954677.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="/" 
         />
      </div> 
      <div className='rounded-xl relative'>
         <div className='absolute w-full h-full bg-black/50 text-white rounded-xl'>
            <p className='text-2xl font-bold px-2 py-4'>Ours Restorants</p>
            <p className='px-2'>You are welcome</p>
            <button className=' border-white bg-white text-black absolute bottom-4 mx-2'>Order Now</button>
         </div>
         <img 
            className='max-h-[180px] md:max-h-[220px] w-full object-cover rounded-xl '
            src="https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="/" 
         />
      </div> 
      <div className='rounded-xl relative'>
         <div className='absolute w-full h-full bg-black/50 text-white rounded-xl'>
            <p className='text-2xl font-bold px-2 py-4'>Lorem ipsum dolor</p>
            <p className='px-2'>Lorem, ipsum.</p>
            <button className=' border-white bg-white text-black absolute bottom-4 mx-2'>Order Now</button>
         </div>
         <img 
            className='max-h-[180px] md:max-h-[220px] w-full object-cover rounded-xl'
            src="https://images.pexels.com/photos/9287802/pexels-photo-9287802.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
            alt="/" 
         />
      </div> 
    </div>
  )
}

export default HandleCards