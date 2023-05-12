import React from 'react';
import { Link } from 'react-router-dom';
import Notice from '../components/Notice';
import { getNotice } from '../api/firebase';
import { useQuery } from '@tanstack/react-query';

export default function NoticeBoard() {
  const {data: notice} = useQuery(['notice'], () => getNotice())
  console.log(notice)

  const hasNotice = notice && notice.length > 0;


  return (
    <section className='w-full text-center py-8'>
      <p>게시글 목록</p>
      {!hasNotice && <p>게시판이 비어있습니다.</p>}
      <ul className='mx-auto'>
        {hasNotice && 
          notice.map((list, index) => <Notice key={index} list={list} index={index} />)      
        }
      </ul>

      <Link to='/notice/new'>게시글 작성</Link>
    </section>
  );
}

