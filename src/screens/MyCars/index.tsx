import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import { Car } from '../../components/Car';
import { CarDTO } from '../../dtos/CarDTO';
import { IRoutesParams } from '../../routes/stack.routes';
import { api } from '../../services/api';
import { AntDesign } from '@expo/vector-icons'

import * as S from './styles'
import { Loading } from '../../components/Loading';

interface CarProps {
  id: string
  user_id: string
  car: CarDTO
  startDate: string
  endDate: string
}

type Props = StackScreenProps<IRoutesParams, 'MyCars'>;

export const MyCars: React.FC<Props> = ({ navigation }) => {
  const [cars, setCars] = useState<CarProps[]>([])
  const [loading, setLoading] = useState(true)

  const { colors } = useTheme()

  const handleBack = () => {
    navigation.goBack()
  }

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await api.get('/schedules_byuser?user_id=1')
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
        backgroundColor='transparent'
        translucent
      />
      <S.Header>
        <BackButton
          onPress={handleBack}
          color={colors.shape}
        />

        <S.Title>
          Escolha uma{'\n'}data de início e{'\n'}fim do aluguel
        </S.Title>

        <S.Subtitle>
          Conforto, segurança e praticidade
        </S.Subtitle>
      </S.Header>

      {loading ? <Loading /> :
        <S.Content>
          <S.Appointments>
            <S.AppointmentTitle>
              Agendamentos Feitos
            </S.AppointmentTitle>

            <S.AppointmentQuantity>
              {cars.length}
            </S.AppointmentQuantity>
          </S.Appointments>

          <FlatList
            data={cars}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <S.CarWrapper>
                <Car data={item.car} />
                <S.CarFooter>
                  <S.CarFooterTitle>Período</S.CarFooterTitle>
                  <S.CarFooterPeriod>
                    <S.CarFooterDate>{item.startDate}</S.CarFooterDate>
                    <AntDesign
                      name='arrowright'
                      size={20}
                      color={colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <S.CarFooterDate>{item.endDate}</S.CarFooterDate>
                  </S.CarFooterPeriod>
                </S.CarFooter>
              </S.CarWrapper>
            )}
          />
        </S.Content>
      }

    </S.Container>
  );
}
