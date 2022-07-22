import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg'

import * as S from './styles'
import { RFValue } from 'react-native-responsive-fontsize';
import { ConfirmButton } from '../../components/ConfirmButton';
import { StackScreenProps } from '@react-navigation/stack';
import { IRoutesParams } from '../../routes/interface';

type RootProps = StackScreenProps<IRoutesParams, 'Confirmation'>;

interface ConfirmationProps extends RootProps {
  title: string
  message: string
  nextScreenRoute: 'Splash' | 'Home' | 'CarDetails' | 'Scheduling' | 'SchedulingDetails' | 'Confirmation' | 'MyCars' | 'SignIn' | 'SignUpFirstStep' | 'SignUpSecondStep'
}

export const Confirmation: React.FC<RootProps> = ({ route, navigation }) => {
  const { width } = useWindowDimensions()
  const { nextScreenRoute, title, message } = route.params

  const handleConfirmRental = () => {
    navigation.navigate(nextScreenRoute)
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
        <S.Title>{title}</S.Title>

        <S.Message>
          {message}
        </S.Message>
      </S.Content>

      <S.Footer>
        <ConfirmButton title='OK' onPress={handleConfirmRental} />
      </S.Footer>
    </S.Container>
  );
}
