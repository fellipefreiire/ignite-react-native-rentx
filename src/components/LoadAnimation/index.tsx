import React from 'react';
import LottieView from 'lottie-react-native'

import loadingCar from '../../assets/loadingCar.json'

import * as S from './styles'

export const LoadAnimation: React.FC = () => {
  return (
    <S.Container>
      <LottieView
        source={loadingCar}
        autoPlay
        loop
        resizeMode='contain'
        style={{
          height: 200
        }}
      />
    </S.Container>
  );
}