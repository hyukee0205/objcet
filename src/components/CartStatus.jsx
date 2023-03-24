import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import useCart from '../hooks/useCart';

export default function CartStatus() {
  const {cartQuery: { data: products }}  = useCart();

  return (
    <div className='relative text-slate-50'>
      <AiOutlineShoppingCart className='text-4xl' />
      {products && (
        <p className='w-6 h-6 text-center bg-slate-50 text-slate-50 font-bold rounded-full absolute -top-1 -right-2'>
          <span className='text-brand'>{products.length}</span>
        </p>
      )}
    </div>
  );
}
