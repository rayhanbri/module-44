import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricing from '../DaisyPricing/DaisyPricing';

const PricingOption = ({pricingPromise}) => {
 
   const pricingData = use(pricingPromise)

  //  console.log(pricingData)

  return (
    <div>
      <h2 className='text-5xl text-center'>Get Our Membership</h2>
      <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-5 '>
        {/* {
          pricingData.map(pricing => <PricingCard 
            key={pricing.id}
            pricing={pricing}></PricingCard>)
        } */}
        {
          pricingData.map(pricing =><DaisyPricing
            pricing={pricing}
            key={pricing.id}
          ></DaisyPricing>)
        }
      </div>
    </div>
  );
};

export default PricingOption;