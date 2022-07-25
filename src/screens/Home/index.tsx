import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import Logo from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize'
import { useNetInfo } from '@react-native-community/netinfo'
import { synchronize } from '@nozbe/watermelondb/sync'

import * as S from './styles';
import { Car } from '../../components/Car';
import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';
import { StackScreenProps } from '@react-navigation/stack';

import { LoadAnimation } from '../../components/LoadAnimation';
import { IRoutesParams } from '../../routes/interface';
import { database } from '../../databases/watermelon';
import { Car as ModelCar } from '../../databases/watermelon/models/Car';

type Props = StackScreenProps<IRoutesParams, 'Home'>;

export const Home: React.FC<Props> = ({ navigation }): JSX.Element => {
  const [cars, setCars] = useState<ModelCar[]>([])
  const [loading, setLoading] = useState(true)

  const netInfo = useNetInfo()

  const handleCarDetails = (car: ModelCar) => {
    navigation.navigate('CarDetails', { car })
  }

  async function offlineSynchronize() {
    await synchronize({
      database,
      pullChanges: async ({ lastPulledAt }) => {
        const response = await api
          .get(`cars/sync/pull?lastPulledVersion=${lastPulledAt || 0}`)

        const { changes, latestVersion } = response.data
        return {
          changes,
          timestamp: latestVersion
        }
      },
      pushChanges: async ({ changes }) => {
        const user = changes.users
        await api.post('/users/sync', user)
      }
    })
  }

  useEffect(() => {
    let isMounted = true

    async function fetchCars() {
      try {
        const carCollection = database.get<ModelCar>('cars')
        const cars = await carCollection.query().fetch()

        if (isMounted) {
          setCars(cars)
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
    if (netInfo.isConnected === true) {
      offlineSynchronize()
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