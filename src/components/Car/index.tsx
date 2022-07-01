import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import GasolineSvg from '../../assets/gasoline.svg';

import * as S from './styles';

interface ICarProps extends RectButtonProps {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  }
  thumbnail: string
}

export const Car: React.FC<ICarProps> = ({
  brand,
  name,
  rent,
  thumbnail,
  ...rest
}): JSX.Element => {
  return (
    <S.Container {...rest}>
      <S.Details>
        <S.Brand>{brand}</S.Brand>
        <S.Name>{name}</S.Name>

        <S.About>
          <S.Rent>
            <S.Period>{rent.period}</S.Period>
            <S.Price>R$ {rent.price}</S.Price>
          </S.Rent>

          <S.Type>
            <GasolineSvg />
          </S.Type>
        </S.About>
      </S.Details>

      <S.CarImage
        source={{ uri: thumbnail }}
        resizeMode='contain'
      />

    </S.Container>
  )
}