import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const MessageHistory = ({ messageHistory = [] }) => {
  return messageHistory.map((row, index) => (
    <div key={index} className='message-history my-4'>
      <div className='sender font-weight-bold'>
        <div>{row.messageBy}</div>
        <div>{row.date}</div>
      </div>
      <div className='message p-3 border border-primary rounded'>{row.message}</div>
    </div>
  ));
};

MessageHistory.propTypes = {
  messageHistory: PropTypes.array.isRequired
};

export default MessageHistory;
