import React, { useContext } from 'react';
import Album from './Album';
import { AlbumContext } from '../store/AlbumStore';

const AlbumList = () => {
  const { albums, setAlbums } = useContext(AlbumContext);

  const renderAlbums = () => {
    if (albums.length === 0) return false;

    return albums.map((albumItem, index) => (
      <Album
        title={albumItem.title}
        no={albumItem.id}
        isRemove={albumItem.remove}
        key={albumItem.id}
        albums={albums}
        setAlbums={setAlbums}
      />
    ));
  };

  return <>{renderAlbums()}</>;
};

export default AlbumList;
