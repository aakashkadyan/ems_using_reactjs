import React, { createContext, useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState({ employees: [], admin: [] });

    useEffect(() => {
        setLocalStorage()
        const storedData = getLocalStorage();
        if (storedData) {
            const { employees = [], admin = [] } = storedData;
            setUserData({ employees, admin });
        }
    }, []);

    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
