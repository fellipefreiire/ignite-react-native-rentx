import React, { useEffect, useState } from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import * as S from './styles'
import { Button } from '../../components/Button';
import { StatusBar } from 'expo-status-bar';
import { StackScreenProps } from '@react-navigation/stack'
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { IRoutesParams } from '../../routes/interface';
import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';
import { useNetInfo } from '@react-native-community/netinfo'

type Props = StackScreenProps<IRoutesParams, 'CarDetails'>;

export const CarDetails: React.FC<Props> = ({ navigation, route }) => {
  const [carUpdated, setCarUpdated] = useState<CarDTO>({} as CarDTO)
  const car = route.params.car
  const netInfo = useNetInfo()

  const scrollY = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y
  })

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 70],
        Extrapolate.CLAMP
      )
    }
  })

  const sliderCarsStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [0, 150],
        [1, 0],
        Extrapolate.CLAMP
      )
    }
  })

  const handleConfirmRental = () => {
    navigation.navigate('Scheduling', {
      car
    })
  }

  const handleBack = () => {
    navigation.goBack()
  }

  useEffect(() => {
    async function fetchCarUpdated() {
      const response = await api.get(`/cars/${car.id}`)
      setCarUpdated(response.data)
    }

    if (netInfo.isConnected === true) fetchCarUpdated()
  }, [netInfo.isConnected])

  return (
    <S.Container>
      <StatusBar
        style='dark'
        backgroundColor='transparent'
        translucent
      />

      <S.HeaderWrapper
        style={[headerStyleAnimation]}
      >
        <S.Header>
          <BackButton onPress={handleBack} />
        </S.Header>

        <S.CarImages style={sliderCarsStyleAnimation}>
          <ImageSlider imagesUrl={
            !!carUpdated.photos ?
              carUpdated.photos : [{ id: car.thumbnail, photo: car.thumbnail }]
          } />
        </S.CarImages>
      </S.HeaderWrapper>

      <S.Content
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <S.Details>
          <S.Description>
            <S.Brand>{car.brand}</S.Brand>
            <S.Name>{car.name}</S.Name>
          </S.Description>

          <S.Rent>
            <S.Period>{car.period}</S.Period>
            <S.Price>
              R$ {netInfo.isConnected === true ? car.price : '...'}
            </S.Price>
          </S.Rent>
        </S.Details>
        {
          carUpdated.accessories &&
          <S.Accessories>
            {
              carUpdated.accessories.map(accessory => (
                <Accessory
                  key={accessory.type}
                  name={accessory.name}
                  icon={getAccessoryIcon(accessory.type)}
                />
              ))
            }
          </S.Accessories>
        }

        <S.About>
          {car.about}
        </S.About>
      </S.Content>

      <S.Footer>
        <Button
          title='Escolher Período do aluguel'
          onPress={handleConfirmRental}
          enabled={netInfo.isConnected === true}
        />
        {
          netInfo.isConnected === false &&
          <S.OfflineInfo>
            Conecte-se à internet para ver mais detalhes e agendar o seu carro.
          </S.OfflineInfo>
        }
      </S.Footer>
    </S.Container >
  );
}