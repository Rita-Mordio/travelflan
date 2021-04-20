import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';

const SignIn = ({ history }) => {
  const sweetAlert = withReactContent(Swal);
  const [userInfo, setUserInfo] = useState({ email: '', password: '', autoSignIn: false });

  const handleInputChange = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckBoxClicked = () => {
    setUserInfo({
      ...userInfo,
      autoSignIn: !userInfo.autoSignIn,
    });
  };

  //로그인 Form 유효성 검사
  const checkValidation = () => {
    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (userInfo.email === '') {
      sweetAlert.fire({ title: '이메일을 입력해 주세요.' });
      return false;
    }

    if (!regExp.test(userInfo.email)) {
      sweetAlert.fire({ title: '올바른 이메일 형식이 아닙니다.' });
      return false;
    }

    if (userInfo.password === '') {
      sweetAlert.fire({ title: '비밀번호를 입력해 주세요.' });
      return false;
    }

    return true;
  };

  //로그인
  const signIn = () => {
    if (!checkValidation()) return false;

    //하드코딩하여 이메일, 패스워드 체크하는 부분
    if (userInfo.email === 'aaa@aaa.com' && userInfo.password === '1234') {
      if (userInfo.autoSignIn) window.sessionStorage.setItem('autoSignIn', 'true');
      history.push('/albums');
    } else {
      sweetAlert.fire({ title: '존재하지 않는 사용자 입니다.' });
    }
  };

  return (
    <>
      {/*자동 로그인 확인하여 albums 페이지로 보내는 부분*/}
      {window.sessionStorage.getItem('autoSignIn') === 'true' && history.push('/albums')}

      <Grid className="signIn--grid" verticalAlign="middle">
        <Grid.Column className="signIn--grid__column">
          <Form size="large">
            <Segment stacked>
              <Form.Input
                value={userInfo.email}
                onChange={handleInputChange}
                name="email"
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Form.Input
                value={userInfo.password}
                onChange={handleInputChange}
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
              <Form.Checkbox checked={userInfo.autoSignIn} onClick={handleCheckBoxClicked} label="자동로그인" />
              <Button color="teal" fluid size="large" onClick={signIn}>
                로그인
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default SignIn;
