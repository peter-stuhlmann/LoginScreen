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
  const passwordVerification = useFormInput('');

  const validationRules = {
    email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,

    // Password must have at least 8 characters; must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number; can contain special characters.
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
  };

  const validateForm = () => {
    let errorCounter = 0;

    if (email.value) {
      const regex = validationRules.email;
      if (!regex.test(email.value)) {
        errorCounter++;
        email.setError('Email is invalid.');
      }
    }
    if (password.value) {
      const regex = validationRules.password;
      if (!regex.test(password.value)) {
        errorCounter++;
        password.setError('Password is unvalid.');
      } else if (passwordVerification.value !== password.value) {
        errorCounter++;
        passwordVerification.setError('Passwords are not identical.');
      }
    }
    return errorCounter === 0;
  };

  const onSignUp = async () => {
    const isValidForm = await validateForm();
    if (!isValidForm) return;

    const formData = new FormData();

    if (email.value) {
      formData.append('email', email.value);
    }
    if (password.value) {
      formData.append('password', password.value);
    }
  };

  const onSignIn = () => {
    console.log('Sign in');
  };

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
            onChange={passwordVerification.onChange}
          />
        )}

        {form === 'login' ? (
          <Button onClick={onSignIn}>Sign in</Button>
        ) : (
          <Button onClick={onSignUp}>Sign up</Button>
        )}

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
