import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import { Car } from '../../components/Car';
import { api } from '../../services/api';
import { AntDesign } from '@expo/vector-icons'
import { Car as ModelCar } from '../../databases/watermelon/models/Car'

import * as S from './styles'
import { LoadAnimation } from '../../components/LoadAnimation';
import { IRoutesParams } from '../../routes/interface';
import { format, parseISO } from 'date-fns';
import { useIsFocused } from '@react-navigation/native';

interface DataProps {
  id: string
  car: ModelCar
  start_date: string
  end_date: string
}

type Props = StackScreenProps<IRoutesParams, 'MyCars'>;

export const MyCars: React.FC<Props> = ({ navigation }) => {
  const [cars, setCars] = useState<DataProps[]>([])
  const [loading, setLoading] = useState(true)

  const { colors } = useTheme()
  const screenIsFocused = useIsFocused()

  const handleBack = () => {
    navigation.goBack()
  }


  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await api.get('/rentals')
        const dateFormatted = response.data.map((data: DataProps) => {
          return {
            id: data.id,
            car: data.car,
            start_date: format(parseISO(data.start_date), 'dd/MM/yyyy'),
            end_date: format(parseISO(data.start_date), 'dd/MM/yyyy'),
          }
        })
        setCars(dateFormatted)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    fetchCars()
  }, [screenIsFocused])

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

      {loading ? <LoadAnimation /> :
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
                    <S.CarFooterDate>{item.start_date}</S.CarFooterDate>
                    <AntDesign
                      name='arrowright'
                      size={20}
                      color={colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <S.CarFooterDate>{item.end_date}</S.CarFooterDate>
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
