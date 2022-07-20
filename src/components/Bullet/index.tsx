import React from 'react';

import * as S from './styles'

interface IBulletProps {
  active?: boolean
}

export const Bullet: React.FC<IBulletProps> = ({ active = false }) => {
  return (
    <S.Container active={active} />
  );
}