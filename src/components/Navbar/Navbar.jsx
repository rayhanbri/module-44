import React, { useState } from 'react';
import Link from './link';
import { Menu, X } from 'lucide-react';

const NavigationData  = [
  {
    "id": 1,
    "name": "Google",
    "path": "https://www.google.com"
  },
  {
    "id": 2,
    "name": "YouTube",
    "path": "https://www.youtube.com"
  },
  {
    "id": 3,
    "name": "Wikipedia",
    "path": "https://www.wikipedia.org"
  },
  {
    "id": 4,
    "name": "GitHub",
    "path": "https://www.github.com"
  },
  {
    "id": 5,
    "name": "BBC News",
    "path": "https://www.bbc.com/news"
  }
]



const Navbar = () => {
  const [open,setOpen] = useState(false)
   const links = NavigationData.map(route =><Link key={route.id} route={route} ></Link>)
  return (
    <nav className='flex  justify-between mx-15'>
     <span className='flex' onClick={()=>setOpen(!open)}>
      {open ?
     <X className='md:hidden'></X>
       : <Menu className='md:hidden'></Menu>}
      <ul className='md:hidden'>
        {
          links
        }
      </ul>
     <h3 className='ml-4'>My Navbar</h3>
     </span>


      <ul className=' hidden md:flex'>
        {
         links
        }
      </ul>
     


      {/* <ul className='flex'>
        {
          NavigationData.map(route =><li className='mr-4'>
            <a href={route.path}>{route.name}</a>
            </li> )
        } */}
      {/* </ul> */}
      {/* <ul className='flex '> */}
        {/* ctrl + alt + down arrow for multi cursor */}
        {/* <li className='mr-4'><a href=''>Home</a></li>
        <li className='mr-4'><a href=''>About</a></li>
        <li className='mr-4'><a href=''>logIN </a></li>
      </ul> */}
      <button>sign in</button>
    </nav>
    
  );
};

export default Navbar;