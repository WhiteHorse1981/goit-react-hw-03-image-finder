import React, { Component } from 'react';
import css from '../components/App.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
// import { Modal } from './Modal/Modal';
import { getImages } from './Api/fetchImages';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    submitQuery: '',
    page: 1,
  };

  async componentDidMount() {
    try {
      const data = await getImages();
      this.setState({ images: data.hits });
    } catch (error) {
      console.log(error.message);
    }
  }

  async componentDidUpdate(_, prevState) {
    if (this.state.submitQuery !== prevState.submitQuery) {
      this.setState({ isLoading: true });
      try {
        const data = await getImages(this.state.page, this.state.submitQuery);
        this.setState({
          images: data.hits,
          page: 1,
          isLoading: false,
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  handleSubmit = inputQuery => {
    this.setState({
      page: 1,
      submitQuery: inputQuery,
    });
  };

  render() {
    const { images } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleSubmit} />

        {images.length > 0 ? <ImageGallery images={images} /> : null}

        <Loader />

        <Button onLoadMore={() => {}} />
      </div>
    );
  }
}
