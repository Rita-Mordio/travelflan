import React, {useContext} from 'react';
import { Menu } from 'semantic-ui-react';
import {AlbumContext} from "../store/AlbumStore";

const TopMenu = ({ history }) => {

  const { setAlbums } = useContext(AlbumContext);

  const logout = () => {
    setAlbums([])
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
