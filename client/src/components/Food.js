import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import ProductItem from './ProductItem';

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

const FoodsCategorys = [ "All", "Pizza", "Burger", "Another", "Fries" ];
const FoodsPrice = [ 20, 50, 100, 200, 300, "All" ];

function Food() {
   
   const { loading, data, error } = useQuery(GET_PRODUCTS);
   const [ Foods, setFoods ] = useState(data);
   const [ arrayDataItem, setArrayDataItem ] = useState([]);
   const [ arrayDataPrice, setArrayDataPrice ] = useState([]);
   
   useEffect(() => {
      if(data?.products){
         setFoods(data.products);
      };
   },[data?.products]);
   
   if(loading){
      return <p>Loading...</p>;
   };
   if(error){
      return <p>Somting wnet wrong<span className='font-bold'>: {error.message}</span></p>;
   };
 
   const filterNameFoods = (category) => {
      const correctData = !arrayDataItem.includes(category) ? [...arrayDataItem,category] : [];   
      setArrayDataItem(correctData)
   
      if(category === "All" || category === undefined || correctData.length === 0 ){
         setArrayDataItem([]);
         setFoods(data.products);
         return arrayDataItem;
      }
      else {
         const res = data.products.filter(({category}) => correctData.includes(category));
         return setFoods(res);
      }
   };

   const filterPriceFoods = (priceItem) => {
      const correctData = !arrayDataPrice.includes(priceItem) ? [...arrayDataPrice, priceItem] : [];   
      setArrayDataPrice(correctData)
   
      if(priceItem === "All" || priceItem === undefined || correctData.length === 0 ){
         setArrayDataItem([]);
         setFoods(data.products);
         return arrayDataPrice;
      }
      else {
         return setFoods(data.products.filter((elem) => elem.price < priceItem));
      }
   };

   // const filterPriceFoods = (price) => {
   //    switch (price) {
   //       case 20:
   //         return setFoods(data.products.filter((item) => item.price >= 5 && item.price <= 20));
   //       case  50:
   //          return setFoods(data.products.filter((item) => item.price >= 20 && item.price <= 50));
   //       case 100:
   //         return setFoods(data.products.filter((item) => item.price >= 50 && item.price <= 100));
   //       case  200:
   //          return setFoods(data.products.filter((item) => item.price >= 100 && item.price <= 250));
   //       case "All":
   //          setFoods(data.products);
   //       break;
   //       default:
   //          setFoods(data.products);
   //    };
   // };

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
                     onClick={() => filterNameFoods(item)} 
                     className={!arrayDataItem.includes(item) ? 'mr-2 font-semibold text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white hover:border-white duration-300': 'bg-orange-600 text-white mr-2'}>{item}
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
                      className='mr-2 font-semibold text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white hover:border-white duration-300'>
                        {item}
                     </button>
                   )
                  }
                  else{
                     return <button 
                     onClick={() => filterPriceFoods(item)}
                     key={index} 
                     className='mr-2 font-semibold text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white hover:border-white duration-300'>
                     Up To: {item}$
                  </button>
                  }
               })}
            </div>
         </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-12">
         {Foods?.map((item, index) => 
            <ProductItem key={index} item={item}/>
         )}
      </div>
    </div>
  );
};

export default Food;