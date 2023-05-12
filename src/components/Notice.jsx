import React from 'react';

export default function Notice({index, list: {content, title, displayName}}) {
  
  return (
   <li>
    <div className='flex'>
      <p className='mr-20'>{index + 1}</p>
      <p className='mr-2'>{content}</p>
      <p className='mr-2'>{title}</p>
      <p className='mr-2'>{displayName}</p>
    </div>
   </li>
  );
}

