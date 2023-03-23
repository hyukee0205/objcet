import React from 'react';

export default function Button2({ text, onClick }) {
  return (
    <button
      className='bg-slate-50 text-brand py-2 px-4 rounded-sm hover:brightness-110'
      onClick={onClick}
    >
      {text}
    </button>
  );
}

