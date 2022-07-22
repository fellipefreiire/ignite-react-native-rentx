import React, { useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';

import ArrowSvg from '../../assets/arrow.svg'

import * as S from './styles'
import { Button } from '../../components/Button';
import { Calendar, DayProps, generateInterval, IMarkedDateProps } from '../../components/Calendar';
import { StackScreenProps } from '@react-navigation/stack';
import { format } from 'date-fns';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { IRoutesParams } from '../../routes/interface';

type Props = StackScreenProps<IRoutesParams, 'Scheduling'>;

interface IRentalPeriod {
  startFormatted: string
  endFormatted: string
}

export const Scheduling: React.FC<Props> = ({ navigation, route }) => {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps)
  const [markedDates, setMarkedDates] = useState<IMarkedDateProps>({} as IMarkedDateProps)
  const [rentalPeriod, setRentalPeriod] = useState<IRentalPeriod>({} as IRentalPeriod)

  const { colors } = useTheme();

  const car = route.params.car

  const handleConfirmRental = () => {
    navigation.navigate('SchedulingDetails', {
      car,
      dates: Object.keys(markedDates)
    })
  }

  const handleBack = () => {
    navigation.goBack()
  }

  const handleChangeDate = (date: DayProps) => {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end
      end = start
    }

    setLastSelectedDate(end)
    const interval = generateInterval(start, end)
    setMarkedDates(interval)

    const firstDate = Object.keys(interval)[0]
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1]

    setRentalPeriod({
      startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy')
    })
  }

  return (
    <S.Container>
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />
      <S.Header>
        <BackButton
          onPress={handleBack}
          color={colors.shape}
        />

        <S.Title>
          Escolha uma{'\n'}data de início e{'\n'}fim do aluguel
        </S.Title>

        <S.RentalPeriod>
          <S.DateInfo>
            <S.DateTitle>DE</S.DateTitle>
            <S.DateValueWrapper selected={!!rentalPeriod.startFormatted}>
              <S.DateValue>
                {rentalPeriod.startFormatted}
              </S.DateValue>
            </S.DateValueWrapper>
          </S.DateInfo>

          <ArrowSvg />

          <S.DateInfo>
            <S.DateTitle>ATÉ</S.DateTitle>
            <S.DateValueWrapper selected={!!rentalPeriod.endFormatted}>
              <S.DateValue >
                {rentalPeriod.endFormatted}
              </S.DateValue>
            </S.DateValueWrapper>
          </S.DateInfo>
        </S.RentalPeriod>
      </S.Header>

      <S.Content showsVerticalScrollIndicator={false}>
        <Calendar
          markedDates={markedDates}
          onDayPress={handleChangeDate}
        />
      </S.Content>

      <S.Footer>
        <Button
          title='Confirmar'
          onPress={handleConfirmRental}
          enabled={!!rentalPeriod.endFormatted}
        />
      </S.Footer>
    </S.Container>
  );
}
