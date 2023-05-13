// import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = () => {
  return (
    <li className={styles.imageGalleryItem}>
      <img src="#" alt="title" className={styles.imageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
