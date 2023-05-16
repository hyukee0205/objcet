import React from 'react';
import NoticeList from './NoticeList';
import useNotice from '../hooks/useNotice';

export default function Notice() {
  const {
    noticeQuery: {isLoading, error, data: notice}
  } = useNotice();


  return ( 
    <>
      <h2 className="text-3xl font-medium mb-6">NOTICE</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <table className="w-full table-fixed">
        <thead>
          <tr className="bg-gray-200">
            <th className="w-1/12 py-2">NO</th>
            <th className="w-5/12 py-2">SUBJECT</th>
            <th className="w-3/12 py-2">NAME</th>
            <th className="w-3/12 py-2">DATE</th>
          </tr>
        </thead>
        <tbody>
          {notice && notice.map((list, index) => (
            <NoticeList key={index} list={list} index={index} />
          ))}
        </tbody>
      </table>
    </>

  );
}

