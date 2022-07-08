import React from 'react';
import { MenuLink } from '../MenuLink';

export const Menu = () => {
  return (
    <nav className='menu'>
      <MenuLink to='/'>Главная</MenuLink>
      <MenuLink to='/drift'>Дрифт-такси</MenuLink>
      <MenuLink to='/timeattack'>Time Attack</MenuLink>
      <MenuLink to='/forza'>Forza Karting</MenuLink>
    </nav>
  );
};
