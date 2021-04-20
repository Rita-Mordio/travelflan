import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Card, Grid, Button, Container } from 'semantic-ui-react';

import { AlbumContext } from '../store/AlbumStore';
import TopMenu from '../components/TopMenu';
import AddAlbumForm from '../components/AddAlbumForm';
import AlbumList from '../components/AlbumList';

const Albums = ({ history }) => {
  const [moreCount, setMoreCount] = useState(0);
  const { albums, setAlbums } = useContext(AlbumContext);

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

    for (let i = moreCount * 5; i < moreCount * 5 + 5; i++) {
      if (reverseResponse[i] === undefined) break;
      tempArray.push(reverseResponse[i]);
    }
    setAlbums(albums.concat(tempArray));
  };

  const clickMoreButton = () => setMoreCount(moreCount + 1);

  return (
    <>
      {/*로그인 유무 체크*/}
      {window.sessionStorage.getItem('login') !== 'true' && history.push('/')}

      {/*상단 메뉴바*/}
      <TopMenu history={history} />

      <Container>
        <Grid>
          <Grid.Row columns={1}>
            <AddAlbumForm />
          </Grid.Row>

          <Card.Group>
            <AlbumList />
          </Card.Group>

          <Grid.Row className="albums--more" centered>
            <Button onClick={clickMoreButton}>더 보기</Button>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
};

export default Albums;
