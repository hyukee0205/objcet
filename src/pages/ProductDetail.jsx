import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';
import {BsCheckCircle} from 'react-icons/bs';

export default function ProductDetail() {
  const {uid, addOrUpdateItem} = useCart();

  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();
  const [success, setSuccess] = useState();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {
    const product = { id, image, title, price, option: selected, quantity: 1 };
    if(uid) {
      addOrUpdateItem.mutate(product, {
        onSuccess: () => {
          setSuccess('장바구니에 추가되었습니다.')
          setTimeout(() => setSuccess(null), 3000);
        }
      });
    } else {
      alert('로그인 후 이용해 주세요.');
    }
  };

  return (
    <>
      <section className='flex flex-col gap-x-20 justify-center md:flex-row p-4'>
        <img className='h-auto max-w-md px-4 basis-7/12 bg-detail' src={image} alt={title} />
        <div className='w-full basis-5/12 flex flex-col p-4'>
          <p className='text-xl underline underline-offset-4'>{category}</p>
          <h2 className='text-2xl font-medium py-3'>{title}</h2>
          <p className='text-xl font-medium pb-4 border-b border-gray-400'>
            ₩{price}
          </p>
          <div className='py-4 border-b border-gray-400'>
            <p className='font-semibold text-lg mb-4'>상품정보</p>
            <p className='text-md '>{description}</p>
          </div>
          <div className='py-4 text-md border-b border-gray-400'>
            <h2 className='font-semibold text-md text-lg mb-4'>배송비</h2>
            <div className='flex mb-2'>
              <p className='mr-3 w-[5rem]'>배송비</p>
              <p>3000원</p>
            </div>
            <div className='flex'>
              <p className='mr-3 w-[5rem]'>배송예정</p>
              <p><span className='text-blue-500 font-semibold'>3일 이내</span> 출고 (주말, 공휴일 제외)</p>
            </div>
          </div>
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
          {success && <p className='my-2 font-medium flex items-center'><BsCheckCircle className='text-lg text-orange mr-1' />{success}</p>}
          <Button text='장바구니 담기' design={'py-4 text-xl bg-brand text-white font-bold hover:bg-orange'} onClick={handleClick} />
        </div>
      </section>
    </>
  );
}
