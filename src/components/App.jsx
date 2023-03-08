import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar';
import { fetchRequest } from './API/api';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchValue: '',
    images: [],
    loading: false,
    error: null,
  };

  handleSubmit = value => {
    this.setState({
      searchValue: value,
    });
  };

  componentDidUpdate(_, prevState) {
    if (prevState.searchValue !== this.state.searchValue) {
      this.setState({ loading: true });

      setTimeout(() => {
        fetchRequest(this.state.searchValue)
          .then(image => this.setState({ images: image.hits }))
          .catch(error => this.setState({ error: error }))
          .finally(this.setState({ loading: false }));
      }, 3000);
    }
  }

  render() {
    const { images, loading } = this.state;
    return (
      <div>
        <ToastContainer autoClose={3000} />
        <Searchbar onSubmit={this.handleSubmit} />
        {loading && <h1>Loading...</h1>}
        <ImageGallery data={images} />
      </div>
    );
  }
}
