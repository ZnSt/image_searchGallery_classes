import { Img, Li } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ src, alt }) => {
  return (
    <Li>
      <Img src={src} alt={alt} />
    </Li>
  );
};
