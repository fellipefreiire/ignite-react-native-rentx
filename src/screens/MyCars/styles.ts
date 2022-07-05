import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.background_primary};
`

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(325)}px;
  
  background-color: ${({ theme: { colors } }) => colors.header};
  
  justify-content: center;
  padding: ${RFValue(25)}px;

  padding-top: ${getStatusBarHeight() + 30}px;
`

export const Title = styled.Text`
  color: ${({ theme: { colors } }) => colors.shape};
  font-family: ${({ theme: { fonts } }) => fonts.secondary_600};
  font-size: ${RFValue(30)}px;
  
  margin-top: ${RFValue(24)}px;
`

export const Subtitle = styled.Text`
  color: ${({ theme: { colors } }) => colors.shape};
  font-family: ${({ theme: { fonts } }) => fonts.secondary_400};
  font-size: ${RFValue(15)}px;
  
  margin-top: ${RFValue(24)}px;
`

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 ${RFValue(16)}px;
`

export const Appointments = styled.View`
  width: 100%;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  padding: ${RFValue(24)}px 0;
`

export const AppointmentTitle = styled.Text`
  color: ${({ theme: { colors } }) => colors.text};
  font-family: ${({ theme: { fonts } }) => fonts.primary_400};
  font-size: ${RFValue(15)}px;
`

export const AppointmentQuantity = styled.Text`
  color: ${({ theme: { colors } }) => colors.title};
  font-family: ${({ theme: { fonts } }) => fonts.primary_500};
  font-size: ${RFValue(15)}px;
`

export const CarWrapper = styled.View`
  margin-bottom: ${RFValue(16)}px;
`

export const CarFooter = styled.View`
  width: 100%;
  padding: ${RFValue(12)}px;

  margin-top: ${RFValue(-10)}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme: { colors } }) => colors.background_secondary};
`

export const CarFooterTitle = styled.Text`
  color: ${({ theme: { colors } }) => colors.text_detail};
  font-family: ${({ theme: { fonts } }) => fonts.secondary_500};
  font-size: ${RFValue(10)}px;
`

export const CarFooterPeriod = styled.View`
  flex-direction: row;
  
`

export const CarFooterDate = styled.Text`
  color: ${({ theme: { colors } }) => colors.title};
  font-family: ${({ theme: { fonts } }) => fonts.primary_400};
  font-size: ${RFValue(13)}px;
`
