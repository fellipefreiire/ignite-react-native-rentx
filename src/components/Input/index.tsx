import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components';
import { TextInputProps } from 'react-native';

import * as S from './styles'
import { BorderlessButton } from 'react-native-gesture-handler';

interface IInputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name']
  isPasswordInput?: boolean
}

export const Input: React.FC<IInputProps> = ({
  iconName,
  value,
  isPasswordInput = false,
  ...rest
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const { colors } = useTheme()

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev)
  }

  const handleInputFocus = () => {
    setIsFocused(true)
  }

  const handleInputBlur = () => {
    setIsFocused(false)
    setIsFilled(!!value)
  }

  return (
    <S.Container >
      <S.IconContainer isFocused={isFocused}>
        <Feather
          name={iconName}
          size={24}
          color={(isFocused || isFilled) ? colors.main : colors.text_detail}
        />
      </S.IconContainer>

      <S.InputText
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        secureTextEntry={isPasswordInput && isPasswordVisible}
        isFocused={isFocused}
        {...rest}
      />

      {isPasswordInput && (
        <BorderlessButton
          onPress={handlePasswordVisibility}
        >
          <S.IconContainer
            isIconInsideInput={true}
            isFocused={isFocused}
          >
            <Feather
              name={isPasswordVisible ? 'eye' : 'eye-off'}
              size={24}
              color={isFocused ? colors.main : colors.text_detail}
            />
          </S.IconContainer>
        </BorderlessButton>
      )}
    </S.Container>
  );
}