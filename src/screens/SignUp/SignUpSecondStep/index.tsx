import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { IRoutesParams } from '../../../routes/interface';
import { api } from '../../../services/api';

import * as S from './styles'

type Props = StackScreenProps<IRoutesParams, 'SignUpSecondStep'>;

export const SignUpSecondStep: React.FC<Props> = ({ route, navigation }) => {
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const { colors } = useTheme()
  const user = route.params.user

  function handleBack() {
    navigation.goBack()
  }

  async function handleRegister() {
    if (!password || !passwordConfirm) return Alert
      .alert('Informe a senha e a confirmação')

    if (password !== passwordConfirm) return Alert
      .alert('As senhas devem ser iguais')

    try {
      await api.post('/users', {
        name: user.name,
        email: user.email,
        password,
        driver_license: user.driverLicense
      })
  
      navigation.navigate('Confirmation', {
        title: 'Conta criada!',
        message: 'Agora é só fazer login\ne aproveitar.',
        nextScreenRoute: 'SignIn'
      })
    } catch(err) {
      Alert.alert('Opa', 'Não foi possível cadastrar!')
    }
  }

  return (
    <KeyboardAvoidingView
      behavior='position'
      enabled
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <S.Header>
            <BackButton onPress={handleBack} />
            <S.Steps>
              <Bullet active />
              <Bullet />
            </S.Steps>
          </S.Header>

          <S.Title>
            Crie sua{'\n'}conta
          </S.Title>
          <S.SubTitle>
            Faça seu cadastro de{'\n'}
            forma rápida e fácil
          </S.SubTitle>

          <S.Form>
            <S.FormTitle>2. Senha</S.FormTitle>
            <Input
              iconName='lock'
              placeholder='Senha'
              isPasswordInput
              onChangeText={setPassword}
              value={password}
            />
            <Input
              iconName='lock'
              placeholder='Repetir Senha'
              isPasswordInput
              onChangeText={setPasswordConfirm}
              value={passwordConfirm}
            />
          </S.Form>

          <Button
            color={colors.success}
            title='Cadastrar'
            onPress={handleRegister}
          />
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
