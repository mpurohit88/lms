import React from 'react';

import { Button } from '../BootstrapWrap'

const ButtonWrap = ({ variant, text, className, onClick }) => {
  return <Button variant={variant} className={className} onClick={onClick}>{text}</Button>
}

export default ButtonWrap;