import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/ProductItem';
import {AiOutlineCloseCircle} from 'react-icons/ai';

function Bascet() {
  
  const cart = useSelector((state) => state.cart);

  const result = cart.reduce((num, i) => {
    return num + i.price;
  },0);

  return (
    <div className='flex flex-col '>
        {cart?.map(( item, index, buttonText ) => { 
          return (
            <div key={index} className='py-2 flex justify-between'>
               <div className='w-full px-2 sm:w-[300px] md:w-[400px]'>
                  <ProductItem item={item} buttonText={buttonText}/>
               </div>
               <div>
                  <AiOutlineCloseCircle/>
               </div>
            </div>
          )
        })}
      <div className='py-4 bg-orange-500 p-4 mt-4 text-white text-xl rounded'>
        {result ? <p><span>All count: </span>{result}$</p> : <p>You have't anything yet</p>}
      </div>
    </div>
  )
};

export default Bascet;