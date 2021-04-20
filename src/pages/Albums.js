import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Card, Grid, Header, Input, Button, Container } from 'semantic-ui-react';

import TopMenu from '../components/TopMenu';
import Album from '../components/Album';

const Albums = ({ history }) => {
  const sweetAlert = withReactContent(Swal);

  const [inputValue, setInputValue] = useState('');
  const [albums, setAlbums] = useState([]);
  const [moreCount, setMoreCount] = useState(0);

  useEffect(() => {
    pageNation();
  }, [moreCount]);

  const getAlbums = () => {
    return axios.get('https://jsonplaceholder.typicode.com/albums');
  };

  const pageNation = async () => {
    const response = await getAlbums();
    const reverseResponse = response.data.reverse();
    const tempArray = [];

    for (let i = moreCount * 5; i < moreCount * 5 + 5; i++) tempArray.push(reverseResponse[i]);
    setAlbums(albums.concat(tempArray));
  };

  const renderAlbums = () => {
    if (albums.length === 0) return false;
    return albums.map((albumItem, index) => <Album title={albumItem.title} no={albumItem.id} key={albumItem.id} />);
  };

  const clickMoreButton = () => setMoreCount(moreCount + 1);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addAlbum = () => {
    if (inputValue === '') {
      sweetAlert.fire({ title: '앨범 명을 입력해 주세요.' });
      return false;
    }

    setAlbums([{
      id: albums[0].id + 1,
      title: inputValue,
      userId: 99
    }].concat(albums))
  };

  return (
    <>
      {/*로그인 유무 체크*/}
      {window.sessionStorage.getItem('login') !== 'true' && history.push('/')}

      {/*상단 메뉴바*/}
      <TopMenu history={history} />

      <Container>
        <Grid>
          <Grid.Row columns={1}>
            <div className="albums--edit">
              <Header as="h3">앨범 추가/수정</Header>
              <Input
                className="albums--edit__input"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="앨범 명을 입력해 주세요."
              />
              <Button className="albums--edit__button" onClick={addAlbum}>
                확인
              </Button>
            </div>
          </Grid.Row>

          <Card.Group>{renderAlbums()}</Card.Group>

          <Grid.Row className="albums--more" centered>
            <Button onClick={clickMoreButton}>더 보기</Button>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
};

export default Albums;
