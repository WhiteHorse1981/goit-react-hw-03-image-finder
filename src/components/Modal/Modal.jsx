import React, { Component } from 'react';
import propTypes from 'prop-types';
import css from './Modal.module.css';

export class Modal extends Component {
  render() {
    const { srcImg, altImg, handleClose } = this.props;
    return (
      <div className={css.Overlay} onClick={handleClose}>
        <div className={css.Modal}>
          <img src={srcImg} alt={altImg} />
          <p className={css.imgAlt}>{altImg}</p>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  srcImg: propTypes.string.isRequired,
  altImg: propTypes.string.isRequired,
  handleClose: propTypes.func,
};
