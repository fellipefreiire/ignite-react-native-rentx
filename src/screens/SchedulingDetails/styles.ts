import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme: { colors } }) => colors.background_secondary};
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: ${RFValue(24)}px;
`

export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: 'center'
  }
})`
`

export const Details = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${RFValue(38)}px;
`

export const Description = styled.View``

export const Brand = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.secondary_500};
  color: ${({ theme: { colors } }) => colors.text_detail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`

export const Name = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.secondary_500};
  color: ${({ theme: { colors } }) => colors.title};
  font-size: ${RFValue(25)}px;
`

export const Rent = styled.View``

export const Period = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.secondary_500};
  color: ${({ theme: { colors } }) => colors.text_detail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`

export const Price = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.secondary_500};
  color: ${({ theme: { colors } }) => colors.main};
  font-size: ${RFValue(25)}px;
`

export const Accessories = styled.View`
  width: 100%;

  flex-direction: row;
  flex-wrap: wrap;

  align-items: center;
  justify-content: space-between;

  margin-top: ${RFValue(16)}px;
`

export const Footer = styled.View`
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.background_secondary};
  padding: ${RFValue(24)}px ${RFValue(24)}px ${RFValue(getBottomSpace() + 24)}px;
`

export const RentalPeriod = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: ${RFValue(40)}px;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme: { colors } }) => colors.line};
  padding-bottom: ${RFValue(16)}px;
  `

export const CalendarIcon = styled.View`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  background-color: ${({ theme: { colors } }) => colors.main};

  justify-content: center;
  align-items: center;
`

export const DateInfo = styled.View``

export const DateTitle = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.primary_500};
  color: ${({ theme: { colors } }) => colors.text_detail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`

export const DateValue = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.primary_500};
  color: ${({ theme: { colors } }) => colors.title};
  font-size: ${RFValue(15)}px;
`

export const RentalPrice = styled.View`
  width: 100%;
  margin-top: ${RFValue(16)}px;
`

export const RentalPriceLabel = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.primary_500};
  color: ${({ theme: { colors } }) => colors.text_detail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`

export const RentalPriceDetails = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const RentalPriceQuota = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.primary_500};
  color: ${({ theme: { colors } }) => colors.title};
  font-size: ${RFValue(15)}px;
`

export const RentalPriceTotal = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.secondary_500};
  color: ${({ theme: { colors } }) => colors.success};
  font-size: ${RFValue(24)}px;
`