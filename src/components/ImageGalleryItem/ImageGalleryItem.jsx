import propTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ onclick, image }) => (
  <li className={css.ImageGalleryItem} key={image.id} onClick={onclick}>
    <img src="" alt="" className={css.ImageGalleryItem_image} />
  </li>
);

ImageGalleryItem.propTypes = {
  image: propTypes.object.isRequired,
  onclick: propTypes.func.isRequired,
};
