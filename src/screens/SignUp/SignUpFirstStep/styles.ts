import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 0 ${RFValue(24)}px;

  background-color: ${({ theme: { colors } }) => colors.background_primary};
`

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: ${getStatusBarHeight() + 31}px;
  margin-bottom: ${RFValue(60)}px;
`

export const Steps = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Title = styled.Text`
  font-size: ${RFValue(40)}px;
  font-family: ${({ theme: { fonts } }) => fonts.secondary_600};
  color: ${({ theme: { colors }}) => colors.title};

  margin-bottom: ${RFValue(16)}px;
`

export const SubTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme: { fonts } }) => fonts.primary_400};
  color: ${({ theme: { colors }}) => colors.text};
  /* line-height: ${RFValue(25)}; */

  margin-bottom: ${RFValue(64)}px;
`

export const Form = styled.View`
  width: 100%;
`

export const FormTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme: { fonts } }) => fonts.secondary_600};
  color: ${({ theme: { colors }}) => colors.title};

  margin-bottom: ${RFValue(24)}px;
`