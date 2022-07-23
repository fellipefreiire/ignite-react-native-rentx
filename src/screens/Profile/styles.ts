import styled, { css } from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { BorderlessButton, RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({ theme: { colors } }) => colors.background_primary};
`

export const Header = styled.View`
  width: 100%;
  height: 227px;
  padding: 0 ${RFValue(24)}px;
  align-items: center;

  background-color: ${({ theme: { colors } }) => colors.header};
`

export const HeaderTop = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  margin-top: ${getStatusBarHeight() + 32}px;
`

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme: { fonts } }) => fonts.secondary_600};
  color: ${({ theme: { colors } }) => colors.background_secondary};
`

export const LogoutButton = styled(BorderlessButton)``

export const PhotoContainer = styled.View`
  width: 180px;
  height: 180px;
  border-radius: 90px;

  background-color: ${({ theme: { colors } }) => colors.shape};
  margin-top: 48px;
  `

export const Photo = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 90px;
  `

export const PhotoButton = styled(RectButton)`
  width: 40px;
  height: 40px;
  
  background-color: ${({ theme: { colors } }) => colors.main};

  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 10px;
  right: 10px;
`

interface IOptionProps {
  active: boolean
}

export const Content = styled.View`
  padding: 0 ${RFValue(24)}px;
  margin-top: ${RFValue(122)}px;
`

export const Options = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme: { colors } }) => colors.line};

  flex-direction: row;
  justify-content: space-around;

  margin-bottom: ${RFValue(24)}px;
`

export const Option = styled.TouchableOpacity<IOptionProps>`
  padding-bottom: ${RFValue(14)}px;

  ${({ active }) => active && css`
    border-bottom-width: 2px;
    border-bottom-color: ${({ theme: { colors } }) => colors.main};
  `}
`

export const OptionTitle = styled.Text<IOptionProps>`
  font-size: ${RFValue(20)}px;

  font-family: ${({ theme: { fonts }, active }) =>
    active ? fonts.secondary_600 : fonts.secondary_500};

  color: ${({ theme: { colors }, active }) =>
    active ? colors.header : colors.text_detail};
`

export const Section = styled.View``