import React from 'react';
import { useContext } from 'react';
import { Authcontext } from '../Components/Providers/Authprovider';

const UseAuth = () => {
    const auth = useContext(Authcontext)
    return auth

};

export default UseAuth;