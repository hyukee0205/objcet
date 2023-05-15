import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NoticeList({
  index,
  list,
  list: {id, title, displayName, date},
}) {

  const navigate = useNavigate();

  return (
    <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-2 text-center">{index + 1}</td>
      <td
        onClick={() => {
        navigate(`/notice/${id}`, { state: { list } });
        }} 
        className="py-2 cursor-pointer"
      >{title}</td>
      <td className="py-2 text-center">{displayName}</td>
      <td className="py-2 text-center">{date}</td>
    </tr>
  );
}

