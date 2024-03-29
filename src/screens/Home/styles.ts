import Animated from 'react-native-reanimated';
import { FlatList, FlatListProps } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import { Car } from '../../databases/watermelon/models/Car';

const ButtonAnimated = Animated.createAnimatedComponent(RectButton)

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

export const CarList = styled(FlatList as new (props: FlatListProps<Car>) => FlatList<Car>)`
  padding: 24px;
`

export const MyCarsButtonWrapper = styled(Animated.View)`
  position: absolute;
  bottom: ${RFValue(12)}px;
  right: ${RFValue(22)}px;
`

export const MyCarsButton = styled(ButtonAnimated)`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;

  border-radius: ${RFValue(30)}px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme: { colors } }) => colors.main};
`