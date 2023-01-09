import React, { Component } from 'react';
import propTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isOpenModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ isOpenModal: !prevState.isOpenModal }));
  };

  render() {
    const { image } = this.props;
    return (
      <>
        <li className={css.ImageGalleryItem} onClick={this.toggleModal}>
          <img
            src={image.webformatURL}
            alt={image.tags}
            className={css.ImageGalleryItem_image}
          />
        </li>

        {this.state.isOpenModal ? (
          <Modal
            onCloseModal={this.toggleModal}
            srcImg={image.largeImageURL}
            altImg={image.tags}
          />
        ) : null}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: propTypes.object.isRequired,
};
