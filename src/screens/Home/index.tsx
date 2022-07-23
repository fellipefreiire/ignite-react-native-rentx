import React, { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';

import Logo from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize'
import { useNetInfo } from '@react-native-community/netinfo'

import * as S from './styles';
import { Car } from '../../components/Car';
import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';
import { StackScreenProps } from '@react-navigation/stack';

import { LoadAnimation } from '../../components/LoadAnimation';
import { IRoutesParams } from '../../routes/interface';

type Props = StackScreenProps<IRoutesParams, 'Home'>;

export const Home: React.FC<Props> = ({ navigation }): JSX.Element => {
  const [cars, setCars] = useState<CarDTO[]>([])
  const [loading, setLoading] = useState(true)

  const netInfo = useNetInfo()

  const handleCarDetails = (car: CarDTO) => {
    navigation.navigate('CarDetails', { car })
  }

  useEffect(() => {
    let isMounted = true

    async function fetchCars() {
      try {
        const response = await api.get('/cars')
        if (isMounted) {
          setCars(response.data)
        }
      } catch (err) {
        console.log(err)
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchCars()

    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    if(netInfo.isConnected) {
      Alert.alert('Você está On-line')
    } else {
      Alert.alert('Você está Off-line')
    }
  }, [netInfo.isConnected])

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
    </S.Container>
  );
}