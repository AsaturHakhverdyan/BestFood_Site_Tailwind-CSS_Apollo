import React  from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';



function ProductItem({ item, buttonText }) {
   
   const dispatch = useDispatch();
   return (
      <div>
         <div 
            onClick={() => {
               dispatch(addToCart(item))
            }}
            key={item.id} 
            className='border shadow-lg rounded-lg hover:scale-105 duration-200'
            >
            <div>
               <img
                  className='w-full h-[200px] object-cover rounded-t-lg' 
                  src={item.image} alt="/" 
               />
               <div className=' rounded-b-lg flex justify-between items-center'>
                  <div className='py-1 px-4'>
                     <p className='font-bold'>{item.name}</p>
                     <p className='text-gray-500'>Price: <span className='text-black font-bold'>{item.price}$</span></p>
                  </div>
                  <div className='mr-4'>
                     <button className='text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white hover:border-white duration-200'>{buttonText ? 'Buy Now': 'Add to Cart'}</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
   };

export default ProductItem;