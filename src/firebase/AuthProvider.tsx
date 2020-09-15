import React, { FC, useEffect, useState, ReactElement, ReactNode } from 'react';
import { auth } from './firebase';
import { AuthContext } from './AuthContext';

const AuthProvider: FC<ReactNode> = ({ children }): ReactElement => {
    const [user, setUser] = useState(null as firebase.User | null);
    const [loadingAuthState, setLoadingAuthState] = useState(true);
    const [availablePoints, setAvailablePoints] = useState(1000);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                //SETS THE USER CREDENTIAL
                const token = await user.getIdToken(true);
                localStorage.setItem('tokenID', token);
                setUser(user);

                // setLoadingAuthState(false);
            }
            setLoadingAuthState(false);
        });
        // eslint-disable-next-line
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                authenticated: user !== null,
                setUser,
                loadingAuthState,
                availablePoints,
                setAvailablePoints,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
