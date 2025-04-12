import React from 'react';
import Link from './link';

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
  return (
    <nav>
     
      <ul className='flex'>
        {
          NavigationData.map(route =><Link key={route.id} route={route} ></Link>)
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
    </nav>
    
  );
};

export default Navbar;