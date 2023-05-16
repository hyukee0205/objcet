import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { useAuthContext } from '../context/AuthContext';
import useNotice from '../hooks/useNotice';


export default function NoticeDetail() {
  const navigate = useNavigate();

  const {
    state: {
      list
    }
  } = useLocation();
  const { id, title, content, displayName, date, uid} = list;


  const {uid: userId} = useAuthContext();

  const {removeNotice} = useNotice();

  const handleDelete = () => {
    if (window.confirm("정말 삭제하겠습니까?") === true) {
      removeNotice.mutate(id, {
        onSuccess: () => {
          alert('게시글이 삭제되었습니다.');
          navigate('/notice');
        }
      }) 
    }
    return;
  };


  return (
    <section className="container max-w-3xl px-24 mx-auto mt-10 mb-20">
      <article className='h-[26rem] border-b border-gray-400 pb-5 mb-5'>
        <p className='mb-3 font-semibold'>Notice</p>
        <h2 className='text-2xl mb-3'>{title}</h2>
        <div className='flex items-center border-b border-gray-400 pb-5 mb-5'>
          <p>{displayName}</p>
          <p className='mx-2 text-sm text-gray-400'>|</p>
          <p>{date}</p>
        </div>
        <p>{content}</p>
      </article>
      <div className='flex justify-between'>
        <Link to='/notice' className='px-4 py-2 font-bold border border-black hover:bg-brand hover:text-white rounded-md'>목록</Link>
        {uid && uid === userId && <div>
          <Button       
          onClick={() => {
          navigate(`/notice/update/${id}`, { state:{ list } });
          }} text='수정' design={'px-4 py-2 border border-black hover:text-orange font-bold text-white bg-brand rounded-md mr-1'} />
          <Button text='삭제' onClick={handleDelete} design={'px-4 py-2 font-bold border border-black hover:text-orange rounded-md'}>삭제</Button>
        </div>}
      </div>
    </section>
  );
}

