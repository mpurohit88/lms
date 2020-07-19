import React, { useState } from 'react';

import { PrimaryButton, ModalWrap } from '../../../components';
import List from './List'
import Create from './Create';

const Course = () => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div>
      Course <br /> <br />

      <PrimaryButton text="Create New Course" onClick={() => setLgShow(!lgShow)} />
      <List />
      <ModalWrap title="Create New Course" lgShow={lgShow} setLgShow={setLgShow}>
        <Create />
      </ModalWrap>
    </div>
  )
}

export default Course;