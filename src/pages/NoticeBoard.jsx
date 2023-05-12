import React from 'react';
import { Link } from 'react-router-dom';

export default function NoticeBoard() {
  return (
    <div>
      <p>게시글 목록</p>
      <Link to='/notice/new'>게시글 작성</Link>
    </div>
  );
}

