import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPencilFill } from 'react-icons/bs';
import User from './User';
import { useAuthContext } from '../context/AuthContext';
import CartStatus from './CartStatus';
import Button2 from './ui/Button2';

export default function Navbar() {
  const { user, login, logout } = useAuthContext();
  return (
    <header className='z-10	sticky top-0 flex justify-between px-8 py-6 bg-brand'>
      <Link to='/' className='flex items-center text-4xl text-brand'>
        <h1 className='font-medium text-slate-50'>OBJECT</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        <Link className='text-slate-50' to='/products'>Products</Link>
        <Link className='text-slate-50' to='/notice'>Notice</Link>
        {user && (
          <Link to='/carts'>
            <CartStatus />
          </Link>
        )}
        {user && user.isAdmin && (
          <Link to='/products/new' className='text-2xl'>
            <BsFillPencilFill className='text-slate-50' />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button2 text={'Login'} onClick={login} />}
        {user && <Button2 text={'Logout'} onClick={logout} />}
      </nav>
    </header>
  );
}
