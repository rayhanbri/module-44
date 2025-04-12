
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOption from './components/PricingOptions/PricingOption'


const pricingPromise = fetch('pricing.json')
.then(res => res.json());

function App() {
  
  return (
    <>
    {/* ctrl + space for tailwind suggestion  */}
     
      <header>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      
      </header>
      <main>
           <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
            <PricingOption pricingPromise={pricingPromise}></PricingOption>
           </Suspense>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
      
     
