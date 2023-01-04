import React, { Component } from 'react';
import css from '../components/App.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
// import { Modal } from './Modal/Modal';
import { getImages } from './Api/fetchImages';

const FETCH_STATUS = {
  Idle: 'idle',
  Pending: 'pending',
  Resolved: 'resolved',
  Rejected: 'rejected',
};

export class App extends Component {
  state = {
    images: [],
    status: FETCH_STATUS.Idle,
    // isLoading: false,
    submitQuery: '',
    page: 1,
  };

  // async componentDidMount() {
  //   try {
  //     const data = await getImages();
  //     this.setState({ page: data.page });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  async componentDidUpdate(_, prevState) {
    const { submitQuery, page } = this.state;

    if (
      this.state.submitQuery !== prevState.submitQuery ||
      this.state.page !== prevState.page
    ) {
      this.setState({ status: FETCH_STATUS.Pending });
      try {
        const data = await getImages(page, submitQuery);
        this.setState(prevState => ({
          images: page > 1 ? [...prevState.images, ...data.hits] : data.hits,
          page,
          status: FETCH_STATUS.Resolved,
        }));
      } catch (error) {
        this.setState({ status: FETCH_STATUS.Rejected });
      }
    }
  }

  handleSubmit = inputQuery => {
    this.setState({
      // images: [],
      page: 1,
      submitQuery: inputQuery,
    });
  };

  hendleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { images, status, page } = this.state;
    const { handleSubmit, hendleLoadMore } = this;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={handleSubmit} />

        {status === FETCH_STATUS.Rejected && (
          <p>Your request has been rejected</p>
        )}

        {(status === FETCH_STATUS.Resolved || page > 1) && (
          <ImageGallery images={images} />
        )}
        {status === FETCH_STATUS.Pending && <Loader />}

        {status === FETCH_STATUS.Resolved && (
          <Button onLoadImg={hendleLoadMore} />
        )}
      </div>
    );
  }
}
