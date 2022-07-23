import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { Confirmation } from '../screens/Confirmation';
import { MyCars } from '../screens/MyCars';
import { IRoutesParams } from './interface';

const { Navigator, Screen } = createStackNavigator<IRoutesParams>()

export const AppStackRoutes: React.FC = (): JSX.Element => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName='HomeScreen'
    >
      <Screen
        name='HomeScreen'
        component={Home}
      />

      <Screen
        name='CarDetails'
        component={CarDetails}
      />

      <Screen
        name='Scheduling'
        component={Scheduling}
      />

      <Screen
        name='SchedulingDetails'
        component={SchedulingDetails}
      />

      <Screen
        name='Confirmation'
        component={Confirmation}
      />

      <Screen
        name='MyCars'
        component={MyCars}
      />
    </Navigator>
  )
}