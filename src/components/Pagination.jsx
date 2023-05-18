import React from 'react';

export default function Pagination({totalPosts, limit, page, setPage}) {
  const numPages = Math.ceil(totalPosts/limit); 
  
  return (
    <section className='flex justify-center mt-4'>
      <div className='flex items-center text-lg'>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          <span className='mr-2 text-center'>{'<'}</span>
        </button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              className={`${
                page === i + 1 ? 'font-medium' : 'text-gray-400'
              }`}
            >
              <span className='px-[3px]'>{i + 1}</span>
            </button>
          ))}
        <button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          <span className='ml-2 text-cneter'>{'>'}</span>
        </button>
      </div>
    </section>
  );
}