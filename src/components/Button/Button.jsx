import propTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ onLoadImg }) => (
  <button type="button" className={css.Button} onClick={onLoadImg}>
    Load more
  </button>
);

Button.propTypes = {
  onLoadImg: propTypes.func,
};
