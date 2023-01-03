import propTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image }) => (
  <li className={css.ImageGalleryItem}>
    <img
      src={image.webformatURL}
      alt={image.tags}
      name={image.largeImageURL}
      className={css.ImageGalleryItem_image}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  image: propTypes.object.isRequired,
};
