import React from 'react';
import Notice from '../components/Notice';
import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export default function NoticeBoard() {
  const {uid} = useAuthContext();
  const navigate = useNavigate();

  return (
    <section className="container w-full px-24 mx-auto mt-10 mb-20">
      <Notice />
      <div className='flex justify-end'>
        <Button 
          text={'게시글 작성'} 
          onClick={() => {
            if(uid) {
              navigate('/notice/new');
            } else {
              alert('로그인 후 이용해 주세요.');
            }
          }}
          design={'mt-4 px-4 py-2 border border-black font-bold text-white bg-brand rounded-md mr-1'}
        />
      </div>
    </section>
  );
};

