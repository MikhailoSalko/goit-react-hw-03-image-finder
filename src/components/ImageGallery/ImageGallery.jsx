import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ hits, onClick }) => {
  return (
    <ul className={styles.imageGallery}>
      {hits.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          alt={tags}
          largeImageURL={largeImageURL}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.defaultProps = {
  hits: [],
};

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  hits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
