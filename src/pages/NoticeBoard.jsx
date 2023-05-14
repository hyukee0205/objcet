import React from 'react';
import Notice from '../components/Notice';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
// import { getNotice } from '../api/firebase';
// import { useQuery } from '@tanstack/react-query';

export default function NoticeBoard() {

  return (
    <section className="container w-full px-24 mx-auto mt-10 mb-20">
      <Notice />
      <Link className='flex justify-end' to='/notice/new'><Button text={'게시글 작성'} design={'mt-4 px-4 py-2 border border-black hover:bg-transparent hover:text-brand font-bold text-white bg-brand rounded-md mr-1'}/></Link>
    </section>
  );
};

