import React from 'react';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose} from 'react-icons/ai';
import useCart from '../hooks/useCart';

const ICON_CLASS = 'text-lg cursor-pointer mx-2';

export default function CartItem({
  product,
  product: { id, image, title, option, quantity, price },
  shipping,
  orderPrice
}) {
  const {addOrUpdateItem, removeItem} = useCart();
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 });
  };
  const handlePlus = () =>
  addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 });

  const handleDelete = () => removeItem.mutate(id);

  return (
    <li className='flex my-2 items-center'>
      <div className='flex flex-1 items-center'>
        <div className='flex basis-2/5'>
          <img className='w-24 md:w-48 rounded-lg bg-detail' src={image} alt={title} />
          <div className='flex flex-col justify-center ml-4'>
            <div className='flex items-center mb-3'>
              <p className='text-lg font-bold'>{title}</p>
              <AiOutlineClose className='text-2xl cursor-pointer border border-brand m-2' onClick={handleDelete} />
            </div>
            <p className='text-base'>{price}원</p>
            <p className='text-base'>옵션 : {option}</p>
          </div>
        </div>
        <div className='flex text-2xl items-center basis-1/5 justify-center'>
          <div className='flex items-center border'>
            <AiOutlineMinus className={ICON_CLASS} onClick={handleMinus} />
            <p className='px-3 border-x'>{quantity}</p>
            <AiOutlinePlus className={ICON_CLASS} onClick={handlePlus} />
          </div>
        </div>
        <div className='flex text-2xl items-center basis-1/5 justify-center font-semibold'>
          <p>{orderPrice}원</p>
        </div>
        <div className='flex text-2xl items-center basis-1/5 justify-center font-semibold'>
          <p>{shipping}원</p>
        </div>
      </div>
    </li>
  );
}
