import React, { Component } from 'react';
import css from '../components/App.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
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
    isOpenModal: false,
    activeImgModal: '',
    activeAltModal: '',
    amountItemPage: 12,
    totalPage: null,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseModalEsc);
  }

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
          images: [...prevState.images, ...data.hits],
          page,
          status: FETCH_STATUS.Resolved,
          totalPage: Math.ceil(data.totalHits / amountItemPage),
        }));
      } catch (error) {
        this.setState({ status: FETCH_STATUS.Rejected });
      }
    }
  }

  handleSubmit = inputQuery => {
    this.setState({
      images: [],
      page: 1,
      submitQuery: inputQuery,
    });
  };

  hendleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  hendleOpenModal = e => {
    this.setState({
      isOpenModal: true,
      activeImgModal: e.target.name,
      activeAltModal: e.target.alt,
    });
  };

  handleCloseModal = () => {
    this.setState({
      isOpenModal: false,
      activeImgModal: '',
      activeAltModal: '',
    });
  };

  handleCloseModalEsc = event => {
    if (event.code === 'Escape') {
      this.handleCloseModal();
    }
  };

  render() {
    const { images, status, page, isOpenModal, totalPage } = this.state;
    const { handleSubmit, hendleLoadMore, hendleOpenModal } = this;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={handleSubmit} />

        {status === FETCH_STATUS.Rejected && <RequestFailed />}

        {(status === FETCH_STATUS.Resolved || page > 1) && (
          <ImageGallery images={images} onImageClick={hendleOpenModal} />
        )}
        {status === FETCH_STATUS.Pending && <Loader />}

        {status === FETCH_STATUS.Resolved &&
          page !== totalPage &&
          images.length !== 0 && <Button onLoadImg={hendleLoadMore} />}

        {isOpenModal ? (
          <Modal
            srcImg={this.state.activeImgModal}
            altImg={this.state.activeAltModal}
            handleClose={this.handleCloseModal}
          />
        ) : null}
      </div>
    );
  }
}
