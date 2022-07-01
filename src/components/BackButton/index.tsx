import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { BorderlessButtonProps } from 'react-native-gesture-handler'

import { useTheme } from 'styled-components';
import * as S from './styles';

interface IBackButtonProps extends BorderlessButtonProps {
  color?: string;
}

export const BackButton: React.FC<IBackButtonProps> = ({ color, ...rest }): JSX.Element => {
  const theme = useTheme();

  return (
    <S.Container {...rest}>
      <MaterialIcons
        name='chevron-left'
        size={24}
        color={color ? color : theme.colors.text}
      />
    </S.Container>
  )
}