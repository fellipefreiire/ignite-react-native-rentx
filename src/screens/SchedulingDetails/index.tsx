import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons'
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import * as S from './styles'
import { Button } from '../../components/Button';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { StackScreenProps } from '@react-navigation/stack';
import { Alert, StatusBar } from 'react-native';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { format } from 'date-fns';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { api } from '../../services/api';
import { IRoutesParams } from '../../routes/interface';
import { CarDTO } from '../../dtos/CarDTO';
import { useNetInfo } from '@react-native-community/netinfo'

type Props = StackScreenProps<IRoutesParams, 'SchedulingDetails'>;

export const SchedulingDetails: React.FC<Props> = ({ navigation, route }) => {
  const [carUpdated, setCarUpdated] = useState<CarDTO>({} as CarDTO)
  const [loading, setLoading] = useState(false)

  const { colors } = useTheme()
  const netInfo = useNetInfo()

  const { car, dates } = route.params

  const rentalTotal = Number(dates.length * car.price)
  const startDate = format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy')
  const endDate = format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy')

  const handleConfirmRental = async () => {
    setLoading(true)

    try {
      await api.post(`/rentals`, {
        user_id: 1,
        car_id: car.id,
        startDate: new Date(dates[0]),
        endDate: new Date(dates[dates.length - 1]),
        total: rentalTotal
      })
    } catch (err) {
      setLoading(false)
      Alert.alert('Não foi possível confirmar o agendamento.')
    }
    navigation.navigate('Confirmation', {
      title: 'Carro Alugado!',
      message: 'Agora você só precisa ir\naté a concessionária da RENTX\npegar o seu automóvel',
      nextScreenRoute: 'Home'
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
        barStyle='dark-content'
        translucent
        backgroundColor='transparent'
      />
      <S.Header>
        <BackButton onPress={handleBack} />
      </S.Header>

      <S.CarImages>
        <ImageSlider imagesUrl={
          !!carUpdated.photos ?
            carUpdated.photos : [{ id: car.thumbnail, photo: car.thumbnail }]
        } />
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
            <S.Period>{car.period}</S.Period>
            <S.Price>R$ {car.price}</S.Price>
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

        <S.RentalPeriod>
          <S.CalendarIcon>
            <Feather
              name='calendar'
              size={RFValue(24)}
              color={colors.shape}
            />
          </S.CalendarIcon>

          <S.DateInfo>
            <S.DateTitle>DE</S.DateTitle>
            <S.DateValue>{startDate}</S.DateValue>
          </S.DateInfo>

          <Feather
            name='chevron-right'
            size={RFValue(15)}
            color={colors.text}
          />

          <S.DateInfo>
            <S.DateTitle>ATÉ</S.DateTitle>
            <S.DateValue>{endDate}</S.DateValue>
          </S.DateInfo>

        </S.RentalPeriod>

        <S.RentalPrice>
          <S.RentalPriceLabel>TOTAL</S.RentalPriceLabel>
          <S.RentalPriceDetails>
            <S.RentalPriceQuota>{`R$ ${car.price} x${dates.length} diárias`}</S.RentalPriceQuota>
            <S.RentalPriceTotal>R$ {rentalTotal}</S.RentalPriceTotal>
          </S.RentalPriceDetails>
        </S.RentalPrice>
      </S.Content>

      <S.Footer>
        <Button
          title='Alugar agora'
          color={colors.success}
          onPress={handleConfirmRental}
          loading={loading}
          enabled={!loading}
        />
      </S.Footer>
    </S.Container>
  );
}