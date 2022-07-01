import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';

import ArrowSvg from '../../assets/arrow.svg'

import * as S from './styles'
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';
import { useNavigation } from '@react-navigation/native';

export const Scheduling: React.FC = () => {
  const { colors } = useTheme();

  const { navigate } = useNavigation()

  const handleConfirmRental = () => {
    navigate('SchedulingDetails')
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
          onPress={() => { }}
          color={colors.shape}
        />

        <S.Title>
          Escolha uma{'\n'}data de início e{'\n'}fim do aluguel
        </S.Title>

        <S.RentalPeriod>
          <S.DateInfo>
            <S.DateTitle>DE</S.DateTitle>
            <S.DateValueWrapper selected={false}>
              <S.DateValue>
              </S.DateValue>
            </S.DateValueWrapper>
          </S.DateInfo>

          <ArrowSvg />

          <S.DateInfo>
            <S.DateTitle>ATÉ</S.DateTitle>
            <S.DateValueWrapper selected={true}>
              <S.DateValue >
                18/06/2021
              </S.DateValue>
            </S.DateValueWrapper>
          </S.DateInfo>
        </S.RentalPeriod>
      </S.Header>

      <S.Content showsVerticalScrollIndicator={false}>
        <Calendar />
      </S.Content>

      <S.Footer>
        <Button title='Confirmar' onPress={handleConfirmRental} />
      </S.Footer>
    </S.Container>
  );
}
