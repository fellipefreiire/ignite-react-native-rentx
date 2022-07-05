import React from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import * as S from './styles'
import { Button } from '../../components/Button';
import { StatusBar } from 'expo-status-bar';
import { IRoutesParams } from '../../routes/stack.routes';
import { StackScreenProps } from '@react-navigation/stack'
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

type Props = StackScreenProps<IRoutesParams, 'CarDetails'>;

export const CarDetails: React.FC<Props> = ({ navigation, route }) => {
  const car = route.params.car

  const handleConfirmRental = () => {
    navigation.navigate('Scheduling', {
      car
    })
  }

  const handleBack = () => {
    navigation.goBack()
  }

  return (
    <S.Container>
      <StatusBar
        style='dark'
        backgroundColor='transparent'
        translucent
      />
      <S.Header>
        <BackButton onPress={handleBack} />
      </S.Header>

      <S.CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </S.CarImages>

      <S.Content
        showsVerticalScrollIndicator={false}
      >
        <S.Details>
          <S.Description>
            <S.Brand>{car.brand}</S.Brand>
            <S.Name>{car.name}</S.Name>
          </S.Description>

          <S.Rent>
            <S.Period>{car.rent.period}</S.Period>
            <S.Price>R$ {car.rent.price}</S.Price>
          </S.Rent>
        </S.Details>

        <S.Accessories>
          {
            car.accessories.map(accessory => (
              <Accessory
                key={accessory.type}
                name={accessory.name}
                icon={getAccessoryIcon(accessory.type)}
              />
            ))
          }
        </S.Accessories>

        <S.About>{car.about}</S.About>
      </S.Content>

      <S.Footer>
        <Button title='Escolher Período do aluguel' onPress={handleConfirmRental} />
      </S.Footer>
    </S.Container>
  );
}