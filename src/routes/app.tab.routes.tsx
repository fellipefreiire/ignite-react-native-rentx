import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CarDTO } from '../dtos/CarDTO';

import HomeSvg from '../assets/home.svg'
import CarSvg from '../assets/car.svg'
import PeopleSvg from '../assets/people.svg'

import { MyCars } from '../screens/MyCars';
import { AppStackRoutes } from './app.stack.routes';
import { useTheme } from 'styled-components';
import { Platform } from 'react-native';
import { IRoutesParams } from './interface';

const { Navigator, Screen } = createBottomTabNavigator<IRoutesParams>()

export const AppTabRoutes: React.FC = (): JSX.Element => {
  const { colors } = useTheme()

  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
      defaultScreenOptions={{
        tabBarActiveTintColor: colors.main,
        tabBarInactiveTintColor: colors.text_detail,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 78,
          backgroundColor: colors.background_primary
        }
      }}
    >
      <Screen
        name='Home'
        component={AppStackRoutes}
        options={{
          tabBarIcon: (({ color }) => {
            <HomeSvg width={24} height={24} fill={color} />
          })
        }}
      />

      <Screen
        name='MyCars'
        component={MyCars}
        options={{
          tabBarIcon: (({ color }) => {
            <CarSvg width={24} height={24} fill={color} />
          })
        }}
      />

      {/* <Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: (({ color }) => {
            <PeopleSvg width={24} height={24} fill={color} />
          })
        }}
      /> */}
    </Navigator>
  )
}