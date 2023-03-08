import { Component } from 'react';
import { ModalStyle, Overlay } from './Modal.styled';

export class Modal extends Component {
  render() {
    return (
      <Overlay>
        <ModalStyle>
          <img src="" alt="" />
        </ModalStyle>
      </Overlay>
    );
  }
}
