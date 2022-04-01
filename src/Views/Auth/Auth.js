import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import AuthForm from '../../Components/Auth/AuthForm';
import { signInUser } from '../../services/users';

export default function Auth({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await signInUser(email, password);
      setCurrentUser(resp.email);
      history.push('/');
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div>
      {error && <h3>{error}</h3>}
      <h1>Sign In</h1>
      <AuthForm {...{ email, password, setEmail, setPassword, handleSubmit }} />
    </div>
  );
}
