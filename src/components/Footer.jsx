import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='py-6 px-8 bg-brand'>
      <Link to='/'>
        <h2 className='text-3xl font-medium text-slate-50 mt-4 mb-8'>OBJECT</h2>
      </Link>
      <div className='text-gray-300 mb-4'>
        <div className='border-b pb-8 mb-2 border-gray-500'> 
          <p>고객센터 : 02-4321-1234</p>
          <p>운영시간 : 10:00 - 17:00 (Mon-Fri)</p>
        </div>
        <div>
          <p>Gangnam-gu, Seoul, Republic of Korea</p>
          <p>Contact : hyukee0205@gmail.com</p>
          <p>Copyright © 2023 Object. All right reserved</p>
        </div>
      </div>
    </footer>
  );
}
