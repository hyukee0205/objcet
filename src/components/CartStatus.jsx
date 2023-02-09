import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { getCart } from '../api/firebase';
import { useQuery } from '@tanstack/react-query';
import { useAuthContext } from '../context/AuthContext';

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: products } = useQuery(['carts'], () => getCart(uid));

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
