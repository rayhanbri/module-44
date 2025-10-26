
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOption from './components/PricingOptions/PricingOption'
import ResultChart from './components/ResultChart/ResultChart'
import axios from 'axios'
import MarksChart from './components/MarksChart/MarksChart'

// 1.How  make a fecth req then send it to another folder 
//what is suspense 


const pricingPromise =fetch('pricing.json').then(res => res.json())


const  markPormise = axios.get('marks.json');

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
           <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
           <MarksChart markPormise={markPormise}></MarksChart>

           </Suspense>
           <ResultChart></ResultChart>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
      
     
