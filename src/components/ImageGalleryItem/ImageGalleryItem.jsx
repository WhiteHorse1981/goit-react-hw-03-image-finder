import propTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image, onClick }) => (
  <li className={css.ImageGalleryItem} onClick={onClick}>
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
  onClick: propTypes.func,
};
