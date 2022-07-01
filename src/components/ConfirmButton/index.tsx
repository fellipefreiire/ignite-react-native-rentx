import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import * as S from './styles'

interface IConfirmButtonProps extends RectButtonProps {
  title: string;
}

export const ConfirmButton: React.FC<IConfirmButtonProps> = ({
  title,
  ...rest
}): JSX.Element => {
  return (
    <S.Container {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
