import React from 'react';


export default function Banner() {
  return (
    <section className='h-[32rem] bg-yellow-900 relative'>
      <div className='w-full bg-cover h-full bg-banner opacity-80' />
      <div className='absolute w-full top-40 text-center text-gray-50 drop-shadow-2xl'>
        <h2 className='text-6xl mb-4'>Select Shop !</h2>
        <p className='text-2xl'>Thank you for coming</p>
      </div>
    </section>
  );
}
