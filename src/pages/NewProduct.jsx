import React, { useState } from 'react';
import { uploadImage } from '../api/uploader';
import Button from '../components/ui/Button';
import useProducts from '../hooks/useProducts';

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();
  const {addProduct} = useProducts();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      console.log(files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file) //
      .then((url) => {
        addProduct.mutate({product, url}, {onSuccess: () => {
          setSuccess('성공적으로 제품이 추가되었습니다.');
          setTimeout(() => {
            setSuccess(null);
          }, 4000);
        }})
      })
      .finally(() => setIsUploading(false));
  };

  return (
    <section className='new_product w-full text-center'>
      <div>
      <h2 className='text-2xl font-bold my-8'>상품등록</h2>
      {success && <p className='my-2'>😃 {success}</p>}
      {file && (
        <img
          className='w-96 mx-auto mb-2'
          src={URL.createObjectURL(file)}
          alt='local file'
        />
      )}
      <form className='flex flex-col px-12' onSubmit={handleSubmit}>
        <div className='flex items-center'>
            <label htmlFor="file">상품 이미지</label>
            <input
              id='file'
              type='file'
              accept='image/*'
              name='file'
              required
              onChange={handleChange}
            />
          </div>
          <div className='flex items-center'>
            <label htmlFor="title">상품명</label>
            <input
              id='title'
              type='text'
              name='title'
              value={product.title ?? ''}
              required
              onChange={handleChange}
            />
          </div>
          <div className='flex items-center'>
            <label htmlFor="price">가격</label>
            <input
              id='price'
              type='number'
              name='price'
              value={product.price ?? ''}
              required
              onChange={handleChange}
            />
          </div>
          <div className='flex items-center'>
            <label htmlFor="category">카테고리</label>
            <input
              id='category'
              type='text'
              name='category'
              value={product.category ?? ''}
              required
              onChange={handleChange}
            />
          </div>

          <div className='flex items-center'>
            <label htmlFor="desc">상품 설명</label>
            <input
              id='desc'
              type='text'
              name='description'
              value={product.description ?? ''}
              required
              onChange={handleChange}
            />
          </div>

          <div className='flex items-center'>
            <label htmlFor="option">옵션</label>
            <input
              id='option'
              type='text'
              name='options'
              value={product.options ?? ''}
              placeholder='콤마(,)로 구분'
              required
              onChange={handleChange}
            />
          </div>

          <Button
            text={isUploading ? '업로드중...' : '제품 등록하기'}
            disabled={isUploading}
          />
        </form>
      </div>
    </section>
  );
}
