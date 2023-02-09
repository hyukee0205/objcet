import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/firebase';
import ProductCard from './ProductCard';

export default function Products() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(['products'], getProducts);
  return (
    <>
      <h2 className='px-24 pt-6 text-3xl font-medium'>NEW ARRIVAL</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-16 px-24 py-6'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}
