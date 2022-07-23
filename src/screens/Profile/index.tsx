import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import { IRoutesParams } from '../../routes/interface';
import { Feather } from '@expo/vector-icons'

import * as S from './styles'
import { Input } from '../../components/Input';
import { Alert, Keyboard, KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useAuth } from '../../hooks/auth';
import * as ImagePicker from 'expo-image-picker'
import * as Yup from 'yup'
import { Button } from '../../components/Button';

type Props = StackScreenProps<IRoutesParams, 'Profile'>;

export const Profile: React.FC<Props> = ({ navigation }) => {
  const { user, signOut, updateUser } = useAuth()
  const [option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');
  const [avatar, setAvatar] = useState(user.avatar)
  const [name, setName] = useState(user.name)
  const [driverLicense, setDriverLicense] = useState(user.driver_license)

  const { colors } = useTheme()

  function handleBack() {
    navigation.goBack()
  }

  function handleOptionChange(optionSelected: 'dataEdit' | 'passwordEdit') {
    setOption(optionSelected)
  }

  async function handleSelectAvatar() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1
    })

    if (result.cancelled) return

    if (result.uri) {
      setAvatar(result.uri)
    }
  }

  async function handleProfileUpdate() {
    try {
      const schema = Yup.object().shape({
        driverLicense: Yup.string()
          .required('CNH é obrigatória'),
        name: Yup.string()
          .required('Nome é obrigatório')
      })

      const data = { name, driverLicense }
      await schema.validate(data)

      await updateUser({
        id: user.id,
        user_id: user.user_id,
        email: user.email,
        name,
        driver_license: driverLicense,
        avatar,
        token: user.token
      })

      Alert.alert('Perfil atualizado')

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        Alert.alert('Opa', err.message)
      } else {
        Alert.alert('Não foi possível atualizar o perfil')
      }
    }
  }

  function handleSignOut() {
    Alert.alert(
      'Tem certeza?',
      'Se você sair, irá precisar de internet para conectar-se novamente',
      [
        {
          text: 'Cancelar',
          onPress: () => { },
        },
        {
          text: 'Sair',
          onPress: () => signOut()
        }
      ]
    )
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <S.Header>
            <S.HeaderTop>
              <BackButton color={colors.shape} onPress={handleBack} />
              <S.HeaderTitle>Editar Perfil</S.HeaderTitle>
              <S.LogoutButton onPress={handleSignOut}>
                <Feather
                  name='power'
                  size={24}
                  color={colors.shape}
                />
              </S.LogoutButton>
            </S.HeaderTop>

            <S.PhotoContainer>
              {!!avatar && <S.Photo source={{ uri: avatar }} />}
              <S.PhotoButton onPress={handleSelectAvatar}>
                <Feather
                  name='camera'
                  size={24}
                  color={colors.shape}
                />
              </S.PhotoButton>
            </S.PhotoContainer>
          </S.Header>

          <S.Content style={{ marginBottom: useBottomTabBarHeight() }}>
            <S.Options>
              <S.Option
                active={option === 'dataEdit'}
                onPress={() => handleOptionChange('dataEdit')}
              >
                <S.OptionTitle active={option === 'dataEdit'}>Dados</S.OptionTitle>
              </S.Option>
              <S.Option
                active={option === 'passwordEdit'}
                onPress={() => handleOptionChange('passwordEdit')}
              >
                <S.OptionTitle active={option === 'passwordEdit'}>Trocar Senha</S.OptionTitle>
              </S.Option>
            </S.Options>
            {option === 'dataEdit' && (
              <S.Section>
                <Input
                  iconName='user'
                  placeholder='Nome'
                  autoCorrect={false}
                  defaultValue={name}
                  onChangeText={setName}
                />
                <Input
                  iconName='mail'
                  editable={false}
                  defaultValue={user.email}
                />
                <Input
                  iconName='credit-card'
                  placeholder='CNH'
                  keyboardType='numeric'
                  defaultValue={driverLicense}
                  onChangeText={setDriverLicense}
                />
              </S.Section>
            )}
            {option === 'passwordEdit' && (
              <S.Section>
                <Input
                  iconName='lock'
                  placeholder='Senha Atual'
                  autoCorrect={false}
                />
                <Input
                  iconName='lock'
                  placeholder='Nova Senha'
                  autoCorrect={false}
                />
                <Input
                  iconName='lock'
                  placeholder='Repetir Senha'
                  autoCorrect={false}
                />
              </S.Section>
            )}

            <Button
              title='Salvar alterações'
              onPress={handleProfileUpdate}
            />
          </S.Content>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
