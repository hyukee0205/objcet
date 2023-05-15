import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import useNotice from '../hooks/useNotice';

export default function UpdateNotice() {

  const {
    state: {
      list
    }
  } = useLocation();

  const {updateNotice} = useNotice();

  const [notice, setNotice] = useState({
    ...list
  });
  // const [success, setSuccess] = useState();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNotice((list) => ({ ...list, [name]: value}));
    console.log(notice);
    console.log(list.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateNotice.mutate(notice, {
      onSuccess: () => {
        // setSuccess('게시글이 수정되었습니다.')
        // setTimeout(() => setSuccess(null), 3000);
        return window.location.href = '/notice';
      }
    })
  }
  return (
    <section className='p-8 max-w-3xl mx-auto mt-5 mb-20'> 
      {/* {success && <p className='my-2'>{success}</p>} */}
      <h2 className='p-4 text-2xl text-center font-bold mb-10'>게시판 등록</h2>
      <form onSubmit={handleSubmit} className='max-w-xl mx-auto'>
      <div className='mb-4'>
        <label htmlFor='title' className='block mb-2 font-bold'>Title</label>
        <input type='text' id='title' name='title' value={notice.title ?? ''} onChange={handleInputChange} className='w-full px-3 py-2 border rounded-md' required/>
      </div>
      <div className='mb-4'>
        <label htmlFor='content' className='block mb-2 font-bold'>Content</label>
        <textarea id='content' name='content' value={notice.content ?? ''} required onChange={handleInputChange} rows={10} cols={50} className='w-full px-3 py-2 border rounded-md'></textarea>
      </div>
      <div className='flex justify-between'>
        <Link to='/notice' className='px-4 py-2 font-bold border border-black hover:bg-brand hover:text-white rounded-md'>목록</Link>
        <div>
          <Button text='등록' type='submit' design={'px-4 py-2 border border-black hover:bg-transparent hover:text-brand font-bold text-white bg-brand rounded-md mr-1'} />
          <Link to='/notice' className='px-4 py-2 font-bold border border-black hover:bg-brand hover:text-white rounded-md'>취소</Link>
        </div>
      </div>
    </form>

    </section>
  );
}

