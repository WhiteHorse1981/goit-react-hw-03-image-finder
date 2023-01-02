// import propTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ filter, handleChange }) => (
  <li className={css.ImageGalleryItem}>
    <img src="" alt="" className={css.ImageGalleryItem_image} />
  </li>
);

// Filter.propTypes = {
//   filter: propTypes.string.isRequired,
//   handleChange: propTypes.func.isRequired,
// };
