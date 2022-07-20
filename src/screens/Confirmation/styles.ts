import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme: { colors } }) => colors.header};

  padding-top: ${RFValue(86)}px;
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  
  padding-bottom: ${RFValue(80)}px;
`

export const Title = styled.Text`
  color: ${({ theme: { colors } }) => colors.shape};
  font-family: ${({ theme: { fonts } }) => fonts.secondary_600};
  font-size: ${RFValue(30)}px;

  margin-top: ${RFValue(40)}px;
`

export const Message = styled.Text`
  color: ${({ theme: { colors } }) => colors.text_detail};
  font-family: ${({ theme: { fonts } }) => fonts.primary_400};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(25)}px;
  text-align: center;

  margin-top: ${RFValue(16)}px;
`

export const Footer = styled.View`
  width: 100%;
  align-items: center;

  margin: ${RFValue(80)}px 0;
`