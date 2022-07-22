import React, { useState } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, StatusBar } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import * as Yup from 'yup'

import * as S from './styles'
import { StackScreenProps } from '@react-navigation/stack';
import { useAuth } from '../../hooks/auth';
import { IRoutesParams } from '../../routes/interface';

type Props = StackScreenProps<IRoutesParams, 'SignIn'>;

export const SignIn: React.FC<Props> = ({ navigation }) => {
  const { colors } = useTheme()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  async function handleSignIn() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório!')
          .email('Digite um e-mail válido!'),
        password: Yup.string()
          .required('Senha é obrigatória!')
      })

      await schema.validate({ email, password })
      Alert.alert('Tudo certo!')

      signIn({ email, password })
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        Alert.alert('Opa', err.message)
      } else {
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, verifique as credenciais'
        )
      }
    }
  }

  function handleNewAccount() {
    navigation.navigate('SignUpFirstStep')
  }

  return (
    <KeyboardAvoidingView
      behavior='position'
      enabled
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <StatusBar
            barStyle='dark-content'
            backgroundColor='transparent'
            translucent
          />
          <S.Header>
            <S.Title>Estamos{'\n'}quase lá.</S.Title>
            <S.SubTitle>Faça seu login para começar{'\n'}uma experiência incrível.</S.SubTitle>
          </S.Header>

          <S.Form>
            <Input
              iconName='mail'
              placeholder='E-mail'
              keyboardType='email-address'
              autoCorrect={false}
              autoCapitalize='none'
              onChangeText={setEmail}
              value={email}
            />

            <Input
              iconName='lock'
              placeholder='Senha'
              isPasswordInput
              onChangeText={setPassword}
              value={password}
            />

          </S.Form>

          <S.Footer>
            <Button
              title='Login'
              onPress={handleSignIn}
              enabled={true}
              loading={false}
            />

            <Button
              title='Criar conta gratuita'
              onPress={handleNewAccount}
              enabled={true}
              loading={false}
              color={colors.background_secondary}
              light
            />
          </S.Footer>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}