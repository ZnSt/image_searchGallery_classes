import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar';
import { fetchRequest } from './API/api';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { Modal } from './Modal';
import { Button } from './Button';
import { BtnUp } from './BtnUp/BtnUp';

export class App extends Component {
  state = {
    searchValue: '',
    images: [],
    loading: false,
    error: null,
    largeImage: '',
    showModal: false,
    page: 1,
    backToUp: false,
  };

  handleSubmit = value => {
    this.setState({
      searchValue: value,
      images: [],
      page: 1,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  openModal = img => {
    this.setState({ showModal: true });
    this.setState({ largeImage: img });
  };

  closeModal = () => {
    this.setState({ showModal: false });
    this.setState({ largeImage: '' });
  };
  componentDidUpdate(_, prevState) {
    if (prevState.searchValue !== this.state.searchValue) {
      this.setState({ loading: true });
      this.setState({ images: [] });

      setTimeout(() => {
        fetchRequest(this.state.searchValue, this.state.page)
          .then(image => {
            console.log(image);
            this.setState({ images: image.hits });
          })
          .catch(error => this.setState({ error: error }))
          .finally(this.setState({ loading: false }));
      }, 2000);
    }

    if (prevState.page !== this.state.page) {
      fetchRequest(this.state.searchValue, this.state.page)
        .then(image =>
          this.setState(prevStateImg => ({
            images: [...prevStateImg.images, ...image.hits],
          }))
        )
        .catch(error => this.setState({ error: error }))
        .finally(this.setState({ loading: false }));
    }

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        this.setState({ backToUp: true });
      } else {
        this.setState({ backToUp: false });
      }
    });
  }

  scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  render() {
    const { images, loading, largeImage, backToUp } = this.state;
    return (
      <div>
        {backToUp && <BtnUp scrollUp={this.scrollUp} />}
        <ToastContainer autoClose={3000} />
        <Searchbar onSubmit={this.handleSubmit} />
        {loading && <Loader />}
        <ImageGallery data={images} openModal={this.openModal} />
        {largeImage && (
          <Modal largeImage={largeImage} closeModal={this.closeModal} />
        )}
        {images.length > 0 && <Button loadMore={this.loadMore} />}
      </div>
    );
  }
}
