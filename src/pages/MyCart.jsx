import React from 'react';
import CartItem from '../components/CartItem';
import { AiFillPlusCircle } from 'react-icons/ai';
import { FaEquals } from 'react-icons/fa';
import PriceCard from '../components/PriceCard';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';

const SHIPPING = 3000;

export default function MyCart() {
  const {cartQuery: { isLoading, data: products }} = useCart();
  const navigate = useNavigate();

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );

  return (
    <section className='p-8 flex flex-col'>
      <p className='text-3xl font-medium text-center pb-8 border-b-4 border-brand'>
        SHOPPING BAG
      </p>
      {!hasProducts && <p className='mt-4'>장바구니에 상품이 없습니다.</p>}
      {hasProducts && (
        <>
          <ul className='flex px-8 font-bold text-center py-4 border-b border-gray-300'>
            <li className='basis-2/5'>상품정보</li>
            <li className='basis-1/5'>수량</li>
            <li className='basis-1/5'>주문금액</li>
            <li className='basis-1/5'>배송비</li>
          </ul>
          <ul className='border-b border-gray-300 mb-8 p-4 px-8'>
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} shipping={SHIPPING} orderPrice={totalPrice} />
              ))}
          </ul>
          <div className='flex justify-between items-center mb-8 pb-8 px-2 md:px-8 lg:px-16 border-b border-gray-300'>
            <PriceCard text='총 주문금액' price={totalPrice} />
            <AiFillPlusCircle className='shrink-0 text-2xl' />
            <PriceCard text='총 배송비' price={SHIPPING} />
            <FaEquals className='shrink-0 text-lg' />
            <PriceCard text='총 결제금액' price={totalPrice + SHIPPING} />
          </div>
          <div className='flex justify-center'>
            <Button text='CONTINUE SHOPPING' design={'w-[17rem] py-4 text-xl border border-brand font-bold mr-1 hover:text-orange'} onClick={() => navigate(`/products`)}/>
            <Button text='CHECK OUT' design={'w-[17rem] py-4 text-xl border border-brand bg-brand text-white font-bold ml-1 hover:text-orange'}/>
          </div>
        </>
      )}
    </section>
  );
}
