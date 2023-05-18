import React, { useState } from 'react';
import NoticeList from './NoticeList';
import useNotice from '../hooks/useNotice';
import Pagination from './Pagination';



export default function Notice() {
  const {
    noticeQuery: {isLoading, error, data: notice}
  } = useNotice();

  const [page, setPage] = useState(1);
  const limit = 10;
  const offset = (page-1)*limit; 

  const postsData = (notice) => {
    if (notice) {
      let result = notice.slice(offset, offset + limit);
      let reverseOffset = notice.length - offset - 1;
      return result.map((item, index) => {
        const pageNumber = reverseOffset - index + 1;
        return { ...item, pageNumber };
      });
    } else {
      return [];
    }
  };
  
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
        {notice && (
          <tbody>
            <NoticeList info={postsData(notice)} />
          </tbody>
        )}
      </table>
      {notice && <Pagination limit={limit} page={page} totalPosts={notice.length} setPage={setPage}/>}
    </>

  );
}



