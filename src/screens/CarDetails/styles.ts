import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper'
import Animated from 'react-native-reanimated';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme: { colors } }) => colors.background_secondary};
`

export const HeaderWrapper = styled(Animated.View)`
  position: absolute;
  overflow: hidden;
  z-index: 1;

  background-color: ${({ theme: { colors } }) => colors.background_secondary};
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  margin-top: ${getStatusBarHeight() + RFValue(18)}px;
  margin-left: ${RFValue(24)}px;
`


export const CarImages = styled(Animated.View)`
  margin-top: ${getStatusBarHeight() + 32}px;
`

export const Content = styled(Animated.ScrollView).attrs({
  contentContainerStyle: {
    padding: 24,
    paddingTop: getStatusBarHeight() + 160,
    alignItems: 'center',
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

export const About = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.primary_400};
  color: ${({ theme: { colors } }) => colors.text};
  font-size: ${RFValue(15)}px;
  text-align: justify;

  margin-top: ${RFValue(23)}px;
  line-height: ${RFValue(25)}px;
`

export const Footer = styled.View`
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.background_secondary};
  padding: ${RFValue(24)}px ${RFValue(24)}px ${RFValue(getBottomSpace() + 24)}px;
`

export const OfflineInfo = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.primary_400};
  color: ${({ theme: { colors } }) => colors.main};
  font-size: ${RFValue(10)}px;
  text-align: center;
`