import React, { Component } from 'react';
import css from '../components/App.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { RequestFailed } from './RequestFailed/RequestFailed';
import { getImages } from './Api/fetchImages';

const FETCH_STATUS = {
  Idle: 'idle',
  Pending: 'pending',
  Resolved: 'resolved',
  Rejected: 'rejected',
};

export class App extends Component {
  state = {
    images: null,
    status: FETCH_STATUS.Idle,
    submitQuery: '',
    page: 1,
    requestedPictures: 12,
    uploadedPictures: null,
  };

  async componentDidUpdate(_, prevState) {
    const { submitQuery, page, requestedPictures } = this.state;

    if (
      this.state.submitQuery !== prevState.submitQuery ||
      this.state.page !== prevState.page
    ) {
      this.setState({ status: FETCH_STATUS.Pending });
      try {
        const data = await getImages(page, submitQuery, requestedPictures);
        if (data.hits.length === 0) {
          this.setState({ status: FETCH_STATUS.Rejected });
          return;
        }
        this.setState(prevState => ({
          images: page > 1 ? [...prevState.images, ...data.hits] : data.hits,
          page,
          status: FETCH_STATUS.Resolved,
          uploadedPictures: data.hits.length,
        }));
      } catch (error) {
        this.setState({ status: FETCH_STATUS.Rejected });
      }
    }
  }

  handleSubmit = inputQuery => {
    this.setState({
      page: 1,
      submitQuery: inputQuery,
    });
  };

  hendleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { images, status, page, uploadedPictures, requestedPictures } =
      this.state;
    const { handleSubmit, hendleLoadMore } = this;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={handleSubmit} />

        {status === FETCH_STATUS.Rejected && <RequestFailed />}

        {(status === FETCH_STATUS.Resolved || page > 1) && (
          <ImageGallery images={images} />
        )}
        {status === FETCH_STATUS.Pending && <Loader />}

        {uploadedPictures >= requestedPictures &&
          status === FETCH_STATUS.Resolved && (
            <Button onLoadImg={hendleLoadMore} />
          )}
      </div>
    );
  }
}
