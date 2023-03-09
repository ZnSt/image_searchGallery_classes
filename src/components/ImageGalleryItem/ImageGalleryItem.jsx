import { Img, Li } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ src, alt, openModal }) => {
  return (
    <Li onClick={openModal}>
      <Img src={src} alt={alt} />
    </Li>
  );
};
