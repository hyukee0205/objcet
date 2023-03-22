import React from 'react';
import {Link} from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import Button from './ui/Button';
import User from './User';
import CartStatus from './CartStatus';



export default function Navbar() {
  const {user, login, logout} = useAuthContext();
  
  return (
    <header className='flex justify-between border-b p-4'>
      <Link to='/' className='flex'>
        <h1 className='font-bold text-5xl'>Project</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold text-xl'>
        <Link to='/products'>Products</Link>
        {user && <Link to='/carts'><CartStatus /></Link>}
        {user && user.isAdmin && (
          <Link to='/products/new'>상품등록!</Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text={'Login'} onClick={login} />}
        {user && <Button text={'Logout'} onClick={logout} />}
      </nav>
    </header>
  );
}

