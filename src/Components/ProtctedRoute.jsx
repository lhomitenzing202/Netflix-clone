/* eslint-disable react/prop-types */

import { Navigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext'

const ProtctedRoute = ({children}) => {

    const {user} = UserAuth();

    if(!user){
       return <Navigate to = "/"/>;
    }

  return children;
  
};

export default ProtctedRoute;