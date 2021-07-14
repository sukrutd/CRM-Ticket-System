import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const SearchForm = ({ searchString, changeHandler }) => {
  return (
    <Form className='my-2'>
      <Form.Group>
        <Form.Control
          type='text'
          name='searchString'
          value={searchString}
          onChange={changeHandler}
          placeholder='Search'
        />
      </Form.Group>
    </Form>
  );
};

SearchForm.propTypes = {
  searchString: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired
};

export default SearchForm;
