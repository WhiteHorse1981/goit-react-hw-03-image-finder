import propTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images, onImageClick }) => (
  <ul className={css.ImageGallery}>
    {images.map(image => (
      <ImageGalleryItem onClick={onImageClick} image={image} key={image.id} />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: propTypes.arrayOf(propTypes.object),
  onImageClick: propTypes.func,
};
