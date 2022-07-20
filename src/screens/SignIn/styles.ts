import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 0 ${RFValue(24)}px;

  background-color: ${({ theme: { colors } }) => colors.background_primary};
`

export const Header = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight() + RFValue(116)}px;
`

export const Title = styled.Text`
  font-size: ${RFValue(40)}px;
  font-family: ${({ theme: { fonts } }) => fonts.secondary_600};
  color: ${({ theme: { colors } }) => colors.title};
`

export const SubTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme: { fonts } }) => fonts.primary_400};
  color: ${({ theme: { colors } }) => colors.text};
  /* line-height: ${RFValue(25)}; */

  margin-top: ${RFValue(16)}px;
`

export const Form = styled.View`
  width: 100%;
  margin: ${RFValue(64)}px 0 ${RFValue(56)}px;
`

export const Footer = styled.View``