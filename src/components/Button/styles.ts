import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

interface IButtonProps extends RectButtonProps {
  color?: string;
}

interface ITitleProps {
  light: boolean;
}

export const Container = styled(RectButton) <IButtonProps>`
  width: 100%;

  padding: 19px;

  align-items: center;
  justify-content: center;

  background-color: ${({ color, theme: { colors } }) => color ? color : colors.main};

  margin-bottom: ${RFValue(8)}px;
`

export const Title = styled.Text<ITitleProps>`
  font-family: ${({ theme: { fonts } }) => fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme: { colors }, light }) =>
    light ? colors.header : colors.shape};
`