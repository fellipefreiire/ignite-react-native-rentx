import styled, { css } from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from "react-native-iphone-x-helper";

interface IDateValueProps {
  selected: boolean
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme: { colors } }) => colors.background_secondary};
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
  font-size: ${RFValue(32)}px;
  
  margin-top: ${RFValue(24)}px;
`

export const RentalPeriod = styled.View`
  width: 100%;
  
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: ${RFValue(32)}px 0;
`

export const DateInfo = styled.View`
  width: 30%;
`

export const DateTitle = styled.Text`
  color: ${({ theme: { colors } }) => colors.text};
  font-family: ${({ theme: { fonts } }) => fonts.secondary_500};
  font-size: ${RFValue(10)}px;
`

export const DateValueWrapper = styled.View<IDateValueProps>`
 ${({ selected, theme: { colors } }) => !selected && css`
    border-bottom-width: 1px;
    border-bottom-color: ${colors.text};
    padding-bottom: 5px;
  `}
`

export const DateValue = styled.Text`
  color: ${({ theme: { colors } }) => colors.shape};
  font-family: ${({ theme: { fonts } }) => fonts.primary_500};
  font-size: ${RFValue(15)}px;
`

export const Content = styled.ScrollView`
  padding-bottom: ${RFValue(24)}px;
`

export const Footer = styled.View`
  padding: ${RFValue(24)}px;
`