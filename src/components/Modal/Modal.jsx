import { createPortal } from 'react-dom';
import React, { Component } from 'react';
import propTypes from 'prop-types';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseModalEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseModalEsc);
  }

  handleCloseModalEsc = event => {
    if (event.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onCloseModal();
    }
  };

  render() {
    const { srcImg, altImg } = this.props;
    return createPortal(
      <div className={css.Overlay} onClick={this.handleBackdropClick}>
        <div className={css.Modal}>
          <img src={srcImg} alt={altImg} />
          <p className={css.imgAlt}>{altImg}</p>
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  srcImg: propTypes.string.isRequired,
  altImg: propTypes.string.isRequired,
};
