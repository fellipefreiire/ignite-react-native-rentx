import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import * as S from './styles'

interface IButtonProps extends RectButtonProps {
  title: string;
  color?: string;
}

export const Button: React.FC<IButtonProps> = ({
  title,
  color,
  ...rest
}): JSX.Element => {
  return (
    <S.Container {...rest} color={color}>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}