import React, { createContext, useState } from 'react';

export const AlbumContext = createContext();

const AlbumStore = (props) => {
  const [albums, setAlbums] = useState([]);

  return <AlbumContext.Provider value={{ albums, setAlbums }}>{props.children}</AlbumContext.Provider>;
};

export default AlbumStore;
