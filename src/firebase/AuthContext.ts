import React from 'react';
import { authcontextTypes } from './types';

export const AuthContext = React.createContext<Partial<authcontextTypes>>({});
