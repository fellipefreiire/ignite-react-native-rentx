import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { useAuth } from '../hooks/auth';

import { AppTabRoutes } from './app.tab.routes';
import { AuthRoutes } from './auth.routes';

interface IRoutesProps {
  onReady: () => void
}

export const Routes: React.FC<IRoutesProps> = ({ onReady }) => {
  const { user } = useAuth()

  return (
    <NavigationContainer onReady={onReady}>
      {user ? <AppTabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
