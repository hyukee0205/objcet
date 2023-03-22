import { createContext, useContext, useEffect, useState } from 'react';
import { login, logout, onUserStateChange } from '../api/firebase';

const AuthContext = createContext();

export function AuthContextProvider({children}) {
  const [user, setUser] = useState();
  
  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{user, uid: user && user.uid ,login, logout}}> 
      {children}
    </AuthContext.Provider>
  )
}


// 필요한 곳에서 사용하기 위한 함수 만들기

export function useAuthContext() {
  return useContext(AuthContext);
}