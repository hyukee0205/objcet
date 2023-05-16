import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import useCart from '../hooks/useCart';

export default function CartStatus() {
  const {cartQuery: { data: products }}  = useCart();

  return (
    <div className='relative text-slate-50'>
      <CiShoppingCart className='text-4xl' />
      {products && (
        <p style={{ backgroundColor: 'rgb(255, 72, 0)' }} className='w-6 h-6 text-center rounded-full absolute -top-1 -right-2'>
          <span className='text-white'>{products.length}</span>
        </p>
      )}
    </div>
  );
}
