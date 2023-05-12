import React from 'react';

export default function Button({ text, onClick, design }) {


  return (
    <button
      className={design ? design : `bg-brand text-white py-2 px-4 rounded-sm hover:brightness-110`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
