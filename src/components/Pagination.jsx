import React from 'react';

export default function Pagination({totalPosts, limit, page, setPage}) {
  const numPages = Math.ceil(totalPosts/limit); 
  
  return (
    <section className='flex justify-center mt-4'>
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          <span className='mr-1'>{'<'}</span>
        </button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              className={`${
                page === i + 1 ? 'font-medium' : ''
              }`}
            >
              {i + 1}
            </button>
          ))}
        <button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          <span className='ml-1'>{'>'}</span>
        </button>
      </div>
    </section>
  );
}