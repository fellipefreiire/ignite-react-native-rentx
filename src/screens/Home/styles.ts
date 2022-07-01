import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme: { colors } }) => colors.background_primary};
`

export const Header = styled.View`
  width: 100%;
  height: 113px;

  background-color: ${({ theme: { colors } }) => colors.header};

  justify-content: flex-end;
  padding: 32px 24px;
`

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  
  font-family: ${({ theme: { fonts } }) => fonts.primary_400};
  color: ${({ theme: { colors } }) => colors.text};
`

export const CarList = styled.FlatList`
  padding: 24px;
`