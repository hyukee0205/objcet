import React from 'react';
import ProductCard from './ProductCard';
import useProducts from '../hooks/useProducts';

export default function Products() {
  const {
    productsQuery: {isLoading, error, data: products}
  } = useProducts();
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
