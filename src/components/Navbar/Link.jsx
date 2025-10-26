import React from 'react';

const Link = ({route}) => {
  return (
    <li className='p-4 lg:mr-4 hover:bg-amber-300'><a href={route.path}>{route.name} </a></li>
  );
};

export default Link;