import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_PRODUCTS = gql`
 query GetProducts {
   products{
      category
      name
      id
      image
      price
   }
 }
`;

const FoodsCategorys = ["All", "Pizza", "Burger", "Another", "Fries"];
const FoodsPrice = [ 20, 50, 100, 200, "All"];

function Food() {
   
   const { loading, data, error } = useQuery(GET_PRODUCTS);
   const [Foods, setFoods] = useState(data);
   
   useEffect(() => {
      if(data?.products){
         setFoods(data.products);
      }
   },[data?.products]);

   if(loading){
      return <p>Loading...</p>;
   };
   if(error){
      return <p>Somting wnet wrong<span className='font-bold'>: - {error.message}</span></p>;
   };

   const filterFoods = (category) => {
      if(category === "All" || category === undefined){
         setFoods(data.products)
      }else {
         setFoods(data.products.filter((item) => item.category === category));
      }
   };
   const filterPriceFoods = (price) => {
      switch (price) {
         case 20:
           return setFoods(data.products.filter((item) => item.price >= 5 && item.price <= 20));
         case  50:
            return setFoods(data.products.filter((item) => item.price >= 20 && item.price <= 50));
         case 100:
           return setFoods(data.products.filter((item) => item.price >= 50 && item.price <= 100));
         case  200:
            return setFoods(data.products.filter((item) => item.price >= 100 && item.price <= 250));
         case "All":
            setFoods(data.products);
         break;
         default:
            setFoods(data.products);
      };
   };

  return (
    <div className='max-w-[1640px] mx-auto px-4 py-7'>
      <h1 className='text-3xl font-bold text-center md:text-4xl lg:text-5xl text-orange-700'>Top Rated Menu Items</h1>
      <div className='flex flex-col lg:flex-row justify-between'>
         <div className='block sm:flex items-center lg:block'>
            <div className='mr-2'>
               <p className='font-medium text-[16px] md:text-xl text-orange-900 '>Filter type</p>
            </div>
            <div className='flex-row justify-center py-4 md:flex'>
               {FoodsCategorys.map((item, index) =>
                  <button 
                     key={index} 
                     onClick={() => filterFoods(item)} 
                     className='mr-2 font-semibold text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white hover:border-white duration-300'>{item}
                  </button>
               )}
            </div>
         </div>
         <div className='block sm:flex items-center lg:block'>
            <div className='mr-2'>
               <p className='font-medium text-[16px] md:text-xl text-orange-900 '>Filter Price</p>
            </div>
            <div className='flex-row justify-center py-4 md:flex'>
               {FoodsPrice.map((item, index) => {
                  if(item === "All") {
                   return  (
                     <button
                      key={index}
                      onClick={() => filterPriceFoods(item)}
                      className='mr-2 font-semibold text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white hover:border-white duration-300'
                      >
                        {item}
                     </button>
                   )
                  }
                  else{
                     return <button 
                     onClick={() => filterPriceFoods(item)}
                     key={index} 
                     className='mr-2 font-semibold text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white hover:border-white duration-300'>
                     Around: {item}$
                  </button>
                  }
               })}
            </div>
         </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-12">
         {Foods?.map(({id, name, price, image}) => 
         <div key={id} className='border shadow-lg rounded-lg hover:scale-105 duration-200'>
            <div>
               <img
                  className='w-full h-[200px] object-cover rounded-t-lg' 
                  src={image} alt="/" 
               />
               <div className=' rounded-b-lg flex justify-between items-center'>
                 <div className='py-1 px-4'>
                     <p className='font-bold'>{name}</p>
                     <p className='text-gray-500'>Price: <span className='text-black font-bold'>{price}$</span></p>
                 </div>
                 <div className='mr-4'>
                     <button className='text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white hover:border-white duration-200'>Buy Now</button>
                 </div>
               </div>
            </div>
         </div>
         )};
      </div>
    </div>
  );
};

export default Food;