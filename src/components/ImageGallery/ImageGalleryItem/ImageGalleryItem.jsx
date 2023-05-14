import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, alt, onClick, largeImageURL }) => {
  return (
    <li
      className={styles.imageGalleryItem}
      onClick={() => onClick({ largeImageURL, alt })}
    >
      <img src={src} alt={alt} className={styles.imageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
