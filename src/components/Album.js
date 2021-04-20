import React, {useContext, useState} from 'react';
import { Card, Image, Button, Icon, Input } from 'semantic-ui-react';
import {AlbumContext} from "../store/AlbumStore";

const Album = ({ title, no, isRemove }) => {

  const { albums, setAlbums } = useContext(AlbumContext);

  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(title);

  const removeAlbum = () => {
    setAlbums(albums.map((albumItem) => (no === albumItem.id ? { ...albumItem, remove: true } : albumItem)));
  };

  const editAlbum = () => {
    setAlbums(albums.map((albumItem) => (no === albumItem.id ? { ...albumItem, title: inputValue } : albumItem)));
    setIsEdit(!isEdit);
  };

  const toggle = () => {
    setIsEdit(!isEdit);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') editAlbum();
  };

  return (
    <>
      {!isRemove && (
        <Card>
          <Image src="http://placehold.it/300x200" />
          <Card.Content>
            {isEdit && (
              <Input className="album--edit__input" value={inputValue} onChange={handleInputChange} onKeyPress={onKeyPress} />
            )}
            {!isEdit && <Card.Header>{title}</Card.Header>}
          </Card.Content>
          <Card.Content extra>
            <p>
              No.<span>{no}</span>
            </p>
            <Button icon onClick={removeAlbum}>
              <Icon name="delete" />
            </Button>
            {isEdit && (
              <>
                <Button onClick={editAlbum}>수정</Button>
                <Button onClick={toggle}>취소</Button>
              </>
            )}
            {!isEdit && (
              <Button icon onClick={toggle}>
                <Icon name="edit" />
              </Button>
            )}
          </Card.Content>
        </Card>
      )}
    </>
  );
};

export default Album;
