import React from 'react';
import { Menu } from 'semantic-ui-react';

const TopMenu = ({ history }) => {
  const logout = () => {
    window.sessionStorage.setItem('autoSignIn', '');
    window.sessionStorage.setItem('login', '');
    history.push('/');
  };

  return (
    <Menu>
      <Menu.Menu position="right">
        <Menu.Item name="log out" onClick={logout}>
          log out
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default TopMenu;
