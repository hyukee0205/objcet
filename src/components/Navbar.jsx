import React from 'react';
import { Link } from 'react-router-dom';
import User from './User';
import { useAuthContext } from '../context/AuthContext';
import CartStatus from './CartStatus';
import { MdAddToPhotos } from 'react-icons/md';
import Button from './ui/Button';


export default function Navbar() {
  const { user, login, logout } = useAuthContext();
  return (
    <header className='z-10	sticky top-0 flex justify-between px-8 py-6 bg-brand'>
      <Link to='/' className='flex items-center text-4xl text-brand'>
        <h1 className='font-medium text-slate-50'>OBJECT</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        <Link className='text-slate-50' to='/products'>SHOP</Link>
        <Link className='text-slate-50' to='/notice'>NOTICE</Link>
        {user && (
          <Link to='/carts'>
            <CartStatus />
          </Link>
        )}
 
        {user && user.isAdmin && (
        <Link to='/products/new' className="flex ml-2 items-center py-2 px-3 justify-center bg-slate-50 text-brand rounded-sm cursor-pointer hover:text-orange">
          <span className="mr-2">NEW</span>
          <MdAddToPhotos size={20} />
        </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text={'Login'} onClick={login}  design={'bg-slate-50 text-brand py-2 px-4 rounded-sm hover:text-orange'}/>}
        {user && <Button text={'Logout'} onClick={logout} design={'bg-slate-50 text-brand py-2 px-4 rounded-sm hover:text-orange'}/>}
      </nav>
    </header>
  );
}
