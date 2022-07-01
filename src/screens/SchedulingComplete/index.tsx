import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg'

import * as S from './styles'
import { RFValue } from 'react-native-responsive-fontsize';
import { ConfirmButton } from '../../components/ConfirmButton';
import { useNavigation } from '@react-navigation/native';

export const SchedulingComplete: React.FC = () => {
  const { width } = useWindowDimensions()

  const { navigate } = useNavigation()

  const handleConfirmRental = () => {
    navigate('Home')
  }

  return (
    <S.Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <LogoSvg
        width={width}
      />

      <S.Content>
        <DoneSvg width={RFValue(80)} height={RFValue(80)} />
        <S.Title>Carro Alugado</S.Title>

        <S.Message>
          Agora você só precisa ir {'\n'}até a concessionária da RENTX {'\n'} pegar seu automóvel.
        </S.Message>
      </S.Content>

      <S.Footer>
        <ConfirmButton title='OK' onPress={handleConfirmRental} />
      </S.Footer>
    </S.Container>
  );
}
