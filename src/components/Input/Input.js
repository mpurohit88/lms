import React from 'react';
import { InputGroup, FormControl } from '../BootstrapWrap';

const Input = ({ text, autoFocus }) => {
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">{text}</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder={text}
          aria-label={text}
          aria-describedby="basic-addon1"
          autoFocus={autoFocus}
        />
      </InputGroup>
    </div>
  )
}

export default Input