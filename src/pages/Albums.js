import React from 'react';
import { Card, Grid, Header, Input, Button, Menu, Container} from 'semantic-ui-react';

import Album from "../components/Album";

const Albums = ({ history }) => {

  const logout = () => {
    window.sessionStorage.setItem('autoSignIn', '');
    window.sessionStorage.setItem('login', '')
    history.push('/');
  };

  return (
    <>
      {/*로그인 유무 체크*/}
      {window.sessionStorage.getItem('login') !== 'true' && history.push('/')}

      <Menu>
        <Menu.Menu position="right">
          <Menu.Item name="log out" onClick={logout}>
            log out
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <Container>
        <Grid>
          <Grid.Row columns={1}>
            <div className='albums--edit'>
              <Header as="h3">Album Title</Header>
              <Input className="albums--edit__input" placeholder="앨범 명을 입력해 주세요." />
              <Button className="albums--edit__button" >추가</Button>
            </div>
          </Grid.Row>

          <Card.Group>
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
          </Card.Group>

          <Grid.Row className='albums--more' centered>
            <Button>더 보기</Button>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
};

export default Albums;
