import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({
  product,
  product: { id, image, title, category, price },
}) {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => {
        navigate(`/products/${id}`, { state: { product } });
      }}
      className='rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105'
    >
      <img className='w-full bg-detail' src={image} alt={title} />
      <p className='mt-3 px-2 underline underline-offset-4'>{category}</p>
      <h3 className='truncate my-1 px-2 text-lg '>{title}</h3>
      <p className='mb-3 px-2'>{`₩${price}`}</p>
    </li>
  );
}
