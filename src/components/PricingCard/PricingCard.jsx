import React from 'react';
import PricingFeature from '../PricingOptions/PricingFeature';

const PricingCard = ({pricing}) => {
  // console.log(pricing)
  const {name,price,description,features}=pricing;
  return (
    <div className='flex flex-col  border bg-amber-700 p-6 rounded-4xl shadow-amber-300 '>
      {/* card header  */}
      <div>
        <h1 className='text-5xl'>{name}</h1>
        <h2 className='text-3xl'>{price}</h2>
      </div>
      {/* card body 
       */}
       <div className='bg-amber-300 p-5 rounded-2xl flex-1'>
        <p>{description}</p>
        {
          features.map((feature,index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
        }
       </div>
       <button className="btn w-full mt-2">Subscribe</button>
    </div>
  );
};

export default PricingCard;