// import PropTypes from 'prop-types';
import styles from './ModalPhoto.module.css';

export const ModalPhoto = ({ largeImageURL, tags }) => {
  return <img src={largeImageURL} alt={tags} className={styles.modalImg} />;
};

// ModalPhoto.propTypes = {
//   largeImageURL: PropTypes.string.isRequired,
//   tags: PropTypes.string.isRequired,
// };
