// import propTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ onLoadMore }) => (
  <button type="button" className={css.Button} onClick={onLoadMore}>
    Load more
  </button>
);
