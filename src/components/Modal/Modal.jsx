import propTypes from 'prop-types';
import css from './Modal.module.css';

export const Modal = ({ srcImg, altImg, handleClose }) => (
  <div className={css.Overlay} onClick={handleClose}>
    <div className={css.Modal}>
      <img src={srcImg} alt={altImg} />
    </div>
  </div>
);

Modal.propTypes = {
  srcImg: propTypes.string.isRequired,
  altImg: propTypes.string.isRequired,
  handleClose: propTypes.func,
};
