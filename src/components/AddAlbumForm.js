import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Button, Header, Input } from 'semantic-ui-react';
import { AlbumContext } from '../store/AlbumStore';

const AddAlbumForm = () => {
  const sweetAlert = withReactContent(Swal);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const { albums, setAlbums } = useContext(AlbumContext);

  const addAlbum = () => {
    if (inputValue === '') {
      sweetAlert.fire({ title: '앨범 명을 입력해 주세요.' });
      return false;
    }

    setAlbums(
      [
        {
          id: albums[0].id + 1,
          title: inputValue,
          userId: 99,
        },
      ].concat(albums),
    );

    setInputValue('');
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') addAlbum();
  };

  return (
    <div className="addAlbumForm--edit">
      <Header as="h3">앨범 추가</Header>
      <Input
        className="addAlbumForm--edit__input"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="앨범 명을 입력해 주세요."
        onKeyPress={onKeyPress}
      />
      <Button className="addAlbumForm--edit__button" onClick={addAlbum}>
        확인
      </Button>
    </div>
  );
};

export default AddAlbumForm;
