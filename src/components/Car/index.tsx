import { useNetInfo } from '@react-native-community/netinfo';
import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Car as ModelCar } from '../../databases/watermelon/models/Car';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

import * as S from './styles';

interface ICarProps extends RectButtonProps {
  data: ModelCar
}

export const Car: React.FC<ICarProps> = ({
  data,
  ...rest
}): JSX.Element => {
  const netInfo = useNetInfo()
  const MotorIcon = getAccessoryIcon(data.fuel_type)

  return (
    <S.Container {...rest}>
      <S.Details>
        <S.Brand>{data.brand}</S.Brand>
        <S.Name>{data.name}</S.Name>

        <S.About>
          <S.Rent>
            <S.Period>{data.period}</S.Period>
            <S.Price>
              R$ {netInfo.isConnected === true ? data.price : '...'}
            </S.Price>
          </S.Rent>

          <S.Type>
            <MotorIcon />
          </S.Type>
        </S.About>
      </S.Details>

      <S.CarImage
        source={{ uri: data.thumbnail }}
        resizeMode='contain'
      />

    </S.Container>
  )
}