import React from 'react';
import { SvgProps } from 'react-native-svg';
import { useTheme } from 'styled-components';

import * as S from './styles'

interface IAccessoryProps {
  name: string;
  icon: React.FC<SvgProps>
}

export const Accessory: React.FC<IAccessoryProps> = ({
  name,
  icon: Icon
}): JSX.Element => {
  const { colors } = useTheme()

  return (
    <S.Container>
      <Icon width={32} height={32} fill={colors.header} />
      <S.Name>{name}</S.Name>
    </S.Container>
  );
}