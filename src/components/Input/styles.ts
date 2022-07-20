import styled, { css } from 'styled-components/native'
import { TextInput } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

interface Props {
  isFocused: boolean
}

interface IIconContainerProps {
  isIconInsideInput?: boolean
  isFocused: boolean
}

export const Container = styled.View`
  flex-direction: row;

  margin-bottom: ${RFValue(8)}px;
`

export const IconContainer = styled.View<IIconContainerProps>`
  width: ${RFValue(56)}px;
  height: ${RFValue(56)}px;

  justify-content: center;
  align-items: center;

  margin-right: ${({ isIconInsideInput }) => isIconInsideInput ? 0 : 2}px;

  background-color: ${({ theme: { colors } }) => colors.background_secondary};

  ${({ isFocused, theme: { colors } }) => isFocused && css`
    border-bottom-width: 2px;
    border-bottom-color: ${colors.main}
  `}
`

export const InputText = styled(TextInput) <Props>`
  flex: 1;
  background-color: ${({ theme: { colors } }) => colors.background_secondary};
  color: ${({ theme: { colors } }) => colors.text};
  font-family: ${({ theme: { fonts } }) => fonts.primary_400};
  font-size: ${RFValue(15)}px;

  padding: 0 ${RFValue(24)}px;

  ${({ isFocused, theme: { colors } }) => isFocused && css`
    border-bottom-width: 2px;
    border-bottom-color: ${colors.main}
  `}
`