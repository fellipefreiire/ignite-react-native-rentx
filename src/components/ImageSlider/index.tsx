import React from 'react';

import * as S from './styles'

interface IImageSliderProps {
  imagesUrl: string[]
}

export const ImageSlider: React.FC<IImageSliderProps> = ({
  imagesUrl,
}): JSX.Element => {
  return (
    <S.Container>
      <S.ImageIndexes>
        <S.ImageIndex active={true} />
        <S.ImageIndex active={false} />
        <S.ImageIndex active={false} />
        <S.ImageIndex active={false} />
      </S.ImageIndexes>

      <S.CarImageWrapper>
        <S.CarImage
          source={{ uri: imagesUrl[0] }}
          resizeMode='contain'
        />
      </S.CarImageWrapper>
    </S.Container>
  );
}
