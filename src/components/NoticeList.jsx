import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NoticeList({
  info
}) {
  const navigate = useNavigate();


  return (
    <>
      {
        info !== undefined ? info.map((data, idx) => {
          const {id, title, displayName, date, pageNumber} = data
          return (
            <tr key={idx} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-2 text-center">{pageNumber}</td>
              <td
                onClick={() => {
                navigate(`/notice/${id}`, {state: {data}} );
                }} 
                className="py-2 cursor-pointer"
              >{title}</td>
              <td className="py-2 text-center">{displayName}</td>
              <td className="py-2 text-center">{date}</td>
            </tr>
          )}) : (
            <tr>
              <td>Loading ..</td>
            </tr>
          )
      }
    </>
  );
}


