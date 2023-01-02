import propTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images, onImageClick }) => (
  <ul className={css.ImageGallery}>
    {images.map(image => (
      <ImageGalleryItem onclick={onImageClick} image={image} />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: propTypes.arrayOf(
    propTypes.exact({
      image: propTypes.object.isRequired,
    })
  ),
  onImageClick: propTypes.func.isRequired,
};
