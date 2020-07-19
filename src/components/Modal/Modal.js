import React from 'react';

import { Modal } from '../BootstrapWrap'

const ModalWrap = ({ title, lgShow, setLgShow, children }) => {
  return <Modal
    size="lg"
    show={lgShow}
    onHide={() => setLgShow(false)}
    aria-labelledby="example-modal-sizes-title-lg"
  >
    <Modal.Header closeButton>
      <Modal.Title id="example-modal-sizes-title-lg">
        {title}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>{children}</Modal.Body>
  </Modal>
}

export default ModalWrap;