import React, { Fragment, useState } from 'react';

import Container from './styled-components/Container';
import TextField from './styled-components/TextField';
import Main from './styled-components/Main';
import Sidebar from './styled-components/Sidebar';
import Button from './styled-components/Button';
import useFormInput from '../utils/useFormInput';

export default function Login() {
  const [form, setForm] = useState('login');

  const email = useFormInput('');
  const password = useFormInput('');

  return (
    <Container>
      <Main>
        <h1>{form === 'login' ? 'Log in' : 'Sign up'}</h1>
        <p>
          Lorem ipsum dolor sit amet consetetur voluptua elitr, diam nonumy
          eirmod tempor.
        </p>
        <TextField
          autoFocus
          label="Email Address"
          variant="outlined"
          onChange={email.onChange}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          onChange={password.onChange}
        />
        {form === 'signup' && password.value !== '' && (
          <TextField
            label="Repeat password"
            type="password"
            variant="outlined"
          />
        )}
        <Button>{form === 'login' ? 'Sign in' : 'Sign up'}</Button>
        <p>
          {form === 'login' ? (
            <Fragment>
              Create a new Account.{' '}
              <span onClick={() => setForm('signup')}>Sign up</span>
            </Fragment>
          ) : (
            <Fragment>
              Already have an Account?{' '}
              <span onClick={() => setForm('login')}>Log in</span>
            </Fragment>
          )}
        </p>
      </Main>
      <Sidebar />
    </Container>
  );
}
