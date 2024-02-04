import { useContext } from 'react'

export const AuthContext = createContext();

export default AuthContextProvider({Children})export function UserAuth(){
    return useContext(AuthContext);
}