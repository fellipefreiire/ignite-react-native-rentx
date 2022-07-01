import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { StackRoutes } from './stack.routes'

interface IRoutesProps {
  onReady: () => void
}

export const Routes: React.FC<IRoutesProps> = ({ onReady }) => {
  return (
    <NavigationContainer onReady={onReady}>
      <StackRoutes />
    </NavigationContainer>
  );
}
