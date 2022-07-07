import React, { useEffect, useState } from 'react';
import { BackHandler, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import Logo from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize'

import * as S from './styles';
import { Car } from '../../components/Car';
import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';
import { Loading } from '../../components/Loading';
import { StackScreenProps } from '@react-navigation/stack';
import { IRoutesParams } from '../../routes/stack.routes';
import { useTheme } from 'styled-components';
import { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { LoadAnimation } from '../../components/LoadAnimation';

type Props = StackScreenProps<IRoutesParams, 'Home'>;

export const Home: React.FC<Props> = ({ navigation }): JSX.Element => {
  const [cars, setCars] = useState<CarDTO[]>([])
  const [loading, setLoading] = useState(true)
  const { colors } = useTheme()

  const positionY = useSharedValue(0)
  const positionX = useSharedValue(0)

  const myCarsButtonWrapperStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value }
      ]
    }
  })

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.positionX = positionX.value
      ctx.positionY = positionY.value
    },
    onActive(event, ctx: any) {
      positionX.value = ctx.positionX + event.translationX
      positionY.value = ctx.positionY + event.translationY
    },
    onEnd() {
      positionX.value = withSpring(0)
      positionY.value = withSpring(0)
    }
  })

  const handleCarDetails = (car: CarDTO) => {
    navigation.navigate('CarDetails', { car })
  }

  const handleOpenMyCars = () => {
    navigation.navigate('MyCars')
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars')
        setCars(response.data)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    fetchCars()
  }, [])

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true
    })
  }, [])

  return (
    <S.Container>
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />
      <S.Header>
        <S.HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          {!loading && (
            <S.TotalCars>
              Total de {cars.length} carros
            </S.TotalCars>
          )}
        </S.HeaderContent>
      </S.Header>
      {loading ? <LoadAnimation /> :
        <S.CarList
          data={cars}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Car data={item} onPress={() => handleCarDetails(item)} />}
        />
      }

      <PanGestureHandler
        onGestureEvent={onGestureEvent}
      >
        <S.MyCarsButtonWrapper
          style={[
            myCarsButtonWrapperStyle,
          ]}
        >
          <S.MyCarsButton onPress={handleOpenMyCars}>
            <Ionicons
              name='ios-car-sport'
              size={32}
              color={colors.shape}
            />
          </S.MyCarsButton>
        </S.MyCarsButtonWrapper>
      </PanGestureHandler>
    </S.Container>
  );
}