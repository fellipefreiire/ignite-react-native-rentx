import React from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import speedSvg from '../../assets/speed.svg'
import accelerationSvg from '../../assets/acceleration.svg'
import forceSvg from '../../assets/force.svg'
import gasolineSvg from '../../assets/gasoline.svg'
import exchangeSvg from '../../assets/exchange.svg'
import peopleSvg from '../../assets/people.svg'

import * as S from './styles'
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export const CarDetails: React.FC = () => {
  const { navigate } = useNavigation()

  const handleConfirmRental = () => {
    navigate('Scheduling')
  }

  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={() => { }} />
      </S.Header>

      <S.CarImages>
        <ImageSlider imagesUrl={[
          'https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png',
          'https://www.pngkit.com/png/full/237-2375888_porsche-panamera-s.png',
        ]} />
      </S.CarImages>

      <S.Content
        showsVerticalScrollIndicator={false}
      >
        <S.Details>
          <S.Description>
            <S.Brand>Lamborghini</S.Brand>
            <S.Name>Huracan</S.Name>
          </S.Description>

          <S.Rent>
            <S.Period>Ao dia</S.Period>
            <S.Price>R$ 580</S.Price>
          </S.Rent>
        </S.Details>

        <S.Accessories>
          <Accessory name='380Km/h' icon={speedSvg} />
          <Accessory name='3.2s' icon={accelerationSvg} />
          <Accessory name='800 HP' icon={forceSvg} />
          <Accessory name='Gasolina' icon={gasolineSvg} />
          <Accessory name='Auto' icon={exchangeSvg} />
          <Accessory name='2 pessoas' icon={peopleSvg} />
        </S.Accessories>

        <S.About>
          Este é um automóvel desportivo. Surgiu do lendário touro de lide indultado nan praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
        </S.About>

      </S.Content>

      <S.Footer>
        <Button title='Escolher Período do aluguel' onPress={handleConfirmRental} />
      </S.Footer>
    </S.Container>
  );
}