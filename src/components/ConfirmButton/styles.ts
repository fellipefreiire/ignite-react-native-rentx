import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: ${RFValue(80)}px;
  height: ${RFValue(56)}px;

  background-color: ${({ theme: { colors } }) => colors.shape_dark};
  
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  color: ${({ theme: { colors } }) => colors.shape};
  font-family: ${({ theme: { fonts } }) => fonts.primary_500};
  font-size: ${RFValue(15)}px;
`
