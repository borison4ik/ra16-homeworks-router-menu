import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import classNames from 'classnames';

type MenuLinkProps = {
  children: React.ReactNode;
  to: string;
  props?: any;
};
export const MenuLink: React.FC<MenuLinkProps> = ({ children, to, ...props }) => {
  const match = useMatch(to);

  return (
    <Link to={to} {...props} className={classNames('menu__item', { 'menu__item-active': match })}>
      {children}
    </Link>
  );
};
