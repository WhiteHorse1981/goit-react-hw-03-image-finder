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
    amountItemPage: 12,
    totalItemPage: null,
  };

  async componentDidUpdate(_, prevState) {
    const { submitQuery, page, amountItemPage } = this.state;

    if (
      this.state.submitQuery !== prevState.submitQuery ||
      this.state.page !== prevState.page
    ) {
      this.setState({ status: FETCH_STATUS.Pending });
      try {
        const data = await getImages(page, submitQuery, amountItemPage);
        if (data.hits.length === 0) {
          this.setState({ status: FETCH_STATUS.Rejected });
          return;
        }
        this.setState(prevState => ({
          images: page > 1 ? [...prevState.images, ...data.hits] : data.hits,
          page,
          status: FETCH_STATUS.Resolved,
          totalItemPage: Math.ceil(data.totalHits / amountItemPage),
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
    const { images, status, page, totalItemPage } = this.state;
    const { handleSubmit, hendleLoadMore } = this;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={handleSubmit} />

        {status === FETCH_STATUS.Rejected && <RequestFailed />}

        {(status === FETCH_STATUS.Resolved || page > 1) && (
          <ImageGallery images={images} />
        )}
        {status === FETCH_STATUS.Pending && <Loader />}

        {status === FETCH_STATUS.Resolved &&
          page !== totalItemPage &&
          images.length !== 0 && <Button onLoadImg={hendleLoadMore} />}
      </div>
    );
  }
}
