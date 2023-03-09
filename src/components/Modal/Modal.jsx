import { ModalStyle, Overlay } from './Modal.styled';
import { Component } from 'react';

export class Modal extends Component {
  backDropClickClose = event => {
    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  };

  closeModalClickEsc = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.closeModalClickEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalClickEsc);
  }
  render() {
    return (
      <Overlay onClick={this.backDropClickClose}>
        <ModalStyle>
          <img src={this.props.largeImage} alt="" width="900" />
        </ModalStyle>
      </Overlay>
    );
  }
}
