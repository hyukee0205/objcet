import React from 'react';
import { getNotice } from '../api/firebase';
import { useQuery } from '@tanstack/react-query';

export default function Notice({}) {
  const {data: notice} = useQuery(['notice'], () => getNotice());
  console.log('notice', notice);
  

  return ( 
    <>
      <h2 className="text-2xl font-bold mb-5">Notice</h2>
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
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-2 text-center">{index + 1}</td>
              <td className="py-2">{list.title}</td>
              <td className="py-2 text-center">{list.displayName}</td>
              <td className="py-2 text-center">{list.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

