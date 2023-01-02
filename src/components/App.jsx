import React, { Component } from 'react';
import css from '../components/App.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
// import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
  };

  render() {
    const { images } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onSubmit} />

        <div>{images.length > 0 ? <ImageGallery images={images} /> : null}</div>

        <Loader />

        <Button onLoadMore={() => {}} />
      </div>
    );
  }
}
