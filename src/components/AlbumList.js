import React, { useContext } from 'react';
import Album from './Album';
import RenderLoader from './RenderLoader';
import { AlbumContext } from '../store/AlbumStore';

const AlbumList = ({ showLoader }) => {
  const { albums, setAlbums } = useContext(AlbumContext);

  const renderAlbums = () => {
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

  return <>{showLoader ? <RenderLoader /> : <>{renderAlbums()}</>}</>;
};

export default AlbumList;
