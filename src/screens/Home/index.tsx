import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
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

type Props = StackScreenProps<IRoutesParams, 'Home'>;

export const Home: React.FC<Props> = ({ navigation }): JSX.Element => {
  const [cars, setCars] = useState<CarDTO[]>([])
  const [loading, setLoading] = useState(true)
  const { colors } = useTheme()

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
      {loading ? <Loading /> :
        <S.CarList
          data={cars}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Car data={item} onPress={() => handleCarDetails(item)} />}
        />
      }

      <S.MyCarsButton onPress={handleOpenMyCars}>
        <Ionicons
          name='ios-car-sport'
          size={32}
          color={colors.shape}
        />
      </S.MyCarsButton>
    </S.Container>
  );
}