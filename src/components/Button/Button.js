import React from 'react';

import { Button } from '../BootstrapWrap'

const ButtonWrap = ({ variant, text, className }) => {
  return <Button variant={variant} className={className}>{text}</Button>
}

export default ButtonWrap;