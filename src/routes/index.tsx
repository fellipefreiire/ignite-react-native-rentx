import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { useAuth } from '../hooks/auth';

import { AppTabRoutes } from './app.tab.routes';
import { AuthRoutes } from './auth.routes';
import { LoadAnimation } from '../components/LoadAnimation';

interface IRoutesProps {
  onReady: () => void
}

export const Routes: React.FC<IRoutesProps> = ({ onReady }) => {
  const { user, loading } = useAuth()

  return (
    loading ? <LoadAnimation /> :
      <NavigationContainer onReady={onReady}>
        {user.id ? <AppTabRoutes /> : <AuthRoutes />}
      </NavigationContainer>
  );
}
