import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar';
import { fetchRequest } from './API/api';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    searchValue: '',
    images: [],
    loading: false,
    error: null,
    largeImage: '',
    showModal: false,
  };

  handleSubmit = value => {
    this.setState({
      searchValue: value,
    });
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
        fetchRequest(this.state.searchValue)
          .then(image => this.setState({ images: image.hits }))
          .catch(error => this.setState({ error: error }))
          .finally(this.setState({ loading: false }));
      }, 2000);
    }
  }

  render() {
    const { images, loading, largeImage } = this.state;
    return (
      <div>
        <ToastContainer autoClose={3000} />
        <Searchbar onSubmit={this.handleSubmit} />
        {loading && <Loader />}
        <ImageGallery data={images} openModal={this.openModal} />
        {largeImage && (
          <Modal largeImage={largeImage} closeModal={this.closeModal} />
        )}
      </div>
    );
  }
}
