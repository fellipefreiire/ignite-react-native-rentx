import React from 'react';
import { StatusBar } from 'react-native';
import Logo from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize'

import * as S from './styles';
import { Car } from '../../components/Car';
import { useNavigation } from '@react-navigation/native';

export const Home: React.FC = (): JSX.Element => {
  const { navigate } = useNavigation()

  const carsData = [
    {
      brand: 'Audi',
      name: 'RS 5 Coupé',
      rent: {
        period: 'ao dia',
        price: 120

      },
      thumbnail: 'https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png'
    },
    {
      brand: 'Porsche',
      name: 'Panamera',
      rent: {
        period: 'ao dia',
        price: 340

      },
      thumbnail: 'https://www.pngkit.com/png/full/237-2375888_porsche-panamera-s.png'
    },
  ]

  const handleCarDetails = () => {
    navigate('CarDetails')
  }

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
          <S.TotalCars>
            Total de 12 carros
          </S.TotalCars>
        </S.HeaderContent>
      </S.Header>

      <S.CarList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Car {...carsData[0]} onPress={handleCarDetails} />}
      />
    </S.Container>
  );
}