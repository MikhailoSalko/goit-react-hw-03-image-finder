import { createPortal } from 'react-dom';
import { Component } from 'react';
// import PropTypes from 'prop-types';

import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  render() {
    const { children } = this.props;
    return createPortal(
      <div className={styles.overlay}>
        <div className={styles.modal}>{children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
