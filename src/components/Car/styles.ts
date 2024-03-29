import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import FastImage from 'react-native-fast-image'

export const Container = styled(RectButton)`
  width: 100%;
  height: ${RFValue(126)}px;

  background-color: ${({ theme: { colors } }) => colors.background_secondary};
  
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  padding: 24px;
  margin-bottom: 16px;
  `

export const Details = styled.View``;

export const Brand = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.secondary_500};
  color: ${({ theme: { colors } }) => colors.text_detail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.secondary_500};
  color: ${({ theme: { colors } }) => colors.title};
  font-size: ${RFValue(15)}px;
`;

export const About = styled.View`
  flex-direction: row;
  align-items: flex-end;

  margin-top: 16px;
`;

export const Rent = styled.View`
  margin-right: 24px;
`;

export const Period = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.secondary_500};
  color: ${({ theme: { colors } }) => colors.text_detail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.secondary_500};
  color: ${({ theme: { colors } }) => colors.main};
  font-size: ${RFValue(15)}px;
`;

export const Type = styled.View`
  padding-bottom: 3px;
`;

export const CarImage = styled(FastImage)`
  width: ${RFValue(167)}px;
  height: ${RFValue(85)}px;
`;