import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='py-6 px-8'>
      <div className='text-3xl font-medium text-brand mt-4 mb-8 border-t border-brand pt-4'>
        <Link to='/'>
          OBJECT
        </Link>
      </div>
      <div className='text-brand mb-4'>
        <div className='border-b pb-8 mb-2 border-brand'> 
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
