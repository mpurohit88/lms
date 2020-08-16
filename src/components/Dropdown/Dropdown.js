import React, { useState } from 'react';

import { InputGroup, FormControl, DropdownButton, Dropdown } from '../BootstrapWrap';

const DropdownWrap = ({ name, title, options, setSelectedValue, onChange, value }) => {

  const dorpdownValues = options.filter(option => option.id === value);

  const [drodownValue, setDrodownValue] = useState((dorpdownValues[0] || []).name);

  const handleClick = (e) => {
    setDrodownValue(e.target.innerText);
    setSelectedValue && setSelectedValue(Number(e.target.id));
    onChange(e.target.name, Number(e.target.id));
  }

  return <InputGroup className="mb-3">
    <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title={title}
      id="input-group-dropdown-1"
    >
      {
        (options || []).map((option, index) => {
          return <Dropdown.Item key={index} name={name} href="#" onClick={(e) => handleClick(e)} id={option.id}> {option.name}</Dropdown.Item>
        })
      }
    </DropdownButton>
    <FormControl aria-describedby="basic-addon1" value={drodownValue} />
  </InputGroup >
}

export default DropdownWrap;