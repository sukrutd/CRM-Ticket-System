import React, { useState } from 'react';
import { Jumbotron } from 'react-bootstrap';
import LoginForm from '../../components/LoginForm';
import ResetPassword from '../../components/ResetPassword';
import './styles.css';

const Entry = () => {
  const [formLoad, setFormLoad] = useState('login');

  const switchForm = (formType) => setFormLoad(formType);

  return (
    <div className='entry-page bg-info'>
      <Jumbotron className='form-box'>
        {formLoad === 'login' && <LoginForm switchForm={switchForm} />}
        {formLoad === 'reset-password' && <ResetPassword switchForm={switchForm} />}
      </Jumbotron>
    </div>
  );
};

export default Entry;
