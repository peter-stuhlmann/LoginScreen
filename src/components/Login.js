import React from 'react';

import Container from './styled-components/Container';
import TextField from './styled-components/TextField';
import Main from './styled-components/Main';
import Sidebar from './styled-components/Sidebar';
import Button from './styled-components/Button';

export default function Login() {
  return (
    <Container>
      <Main>
        <h1>Log In</h1>
        <p>
          Lorem ipsum dolor sit amet consetetur voluptua elitr, diam nonumy
          eirmod tempor.
        </p>
        <TextField autoFocus label="Email Address" variant="outlined" />
        <TextField label="Password" type="password" variant="outlined" />
        <Button>Sign in</Button>
        <p>
          Create a new Account. <span>Sign up</span>
        </p>
      </Main>
      <Sidebar />
    </Container>
  );
}
