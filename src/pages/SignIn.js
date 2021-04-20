import React, { useState } from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';

const SignIn = () => {
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

  const signIn = () => {};

  return (
    <Grid className="signIn--grid"  verticalAlign="middle">
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
            <Button color="teal" fluid size="large">
              로그인
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default SignIn;
