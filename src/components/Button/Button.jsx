import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button type="submit" className={styles.button} onClick={onClick}>
      Load more
    </button>
  );
};
export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
