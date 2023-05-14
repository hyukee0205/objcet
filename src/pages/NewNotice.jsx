import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { addOrUpdateToNotice } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function NewNotice() {
  const {user: {uid, displayName}} = useAuthContext();

  const [notice, setNotice] = useState({});

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNotice((notice) => ({ ...notice, [name]: value, displayName: displayName, uid: uid}));
  };

  const handleSubmit = event => {
    event.preventDefault();
    addOrUpdateToNotice(notice);
  };



  


  
  return (
    <section className='p-8 mx-auto mt-5 mb-20'> 
      <h2 className='p-4 text-2xl text-center font-bold mb-10'>게시판 등록</h2>
      <form onSubmit={handleSubmit} className='max-w-xl mx-auto'>
      <div className='mb-4'>
        <label htmlFor='title' className='block mb-2 font-bold'>Title:</label>
        <input type='text' id='title' name='title' value={notice.title ?? ''} onChange={handleInputChange} className='w-full px-3 py-2 border rounded-md' required/>
      </div>
      <div className='mb-4'>
        <label htmlFor='content' className='block mb-2 font-bold'>Content:</label>
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

