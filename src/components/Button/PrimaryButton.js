import React from 'react';

import Button from './Button'

const PrimaryButton = ({ text, onClick }) => {
  return <Button variant="primary" text={text} onClick={onClick} />
}

export default PrimaryButton;