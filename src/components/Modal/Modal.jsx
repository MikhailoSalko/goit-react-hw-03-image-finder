// import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <img src="#" alt="title" />
      </div>
    </div>
  );
};

export default Modal;
