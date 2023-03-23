import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { addOrUpdateToCart } from '../api/firebase';
import Button from '../components/ui/Button';
import { useAuthContext } from '../context/AuthContext';

export default function ProductDetail() {
  const { uid } = useAuthContext();
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {
    const product = { id, image, title, price, option: selected, quantity: 1 };
    addOrUpdateToCart(uid, product);
  };

  return (
    <>
      <section className='flex flex-col gap-x-20 justify-center md:flex-row p-4'>
        <img className='h-auto max-w-xl px-4 basis-7/12 bg-detail' src={image} alt={title} />
        <div className='w-full basis-5/12 flex flex-col p-4'>
          <p className='text-xl underline underline-offset-4'>{category}</p>
          <h2 className='text-2xl font-medium py-3'>{title}</h2>
          <p className='text-xl font-medium pb-4 border-b border-gray-400'>
            ₩{price}
          </p>
          <p className='py-4 text-md border-b border-gray-400'>{description}</p>
            <label className='text-brand font-bold pt-4 pb-3' htmlFor='select'>
              Option
            </label>
            <select
              id='select'
              className='form-select appearance-none
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding bg-no-repeat
              border border-solid border-gray-400
              rounded
              transition
              ease-in-out
              mb-4
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
              onChange={handleSelect}
              value={selected}
            >
              {options &&
                options.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
            </select>
          <Button text='장바구니에 추가' onClick={handleClick} />
        </div>
      </section>
    </>
  );
}
