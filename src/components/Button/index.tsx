import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import * as S from './styles'

interface IButtonProps extends RectButtonProps {
  title: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
}

export const Button: React.FC<IButtonProps> = ({
  title,
  color,
  enabled = true,
  loading = false,
  light = false,
  ...rest
}): JSX.Element => {
  const { colors } = useTheme()

  return (
    <S.Container
      {...rest}
      color={color}
      enabled={enabled}
      style={{ opacity: (enabled === false || loading === true) ? .5 : 1 }}
    >
      {
        loading ?
          <ActivityIndicator color={colors.shape} /> :
          <S.Title light={light}>{title}</S.Title>
      }
    </S.Container>
  )
}