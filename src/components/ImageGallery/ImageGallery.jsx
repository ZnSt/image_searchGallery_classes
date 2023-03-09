import { Ul } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

export const ImageGallery = ({ data, openModal }) => {
  return (
    <Ul>
      {data?.map(item => (
        <ImageGalleryItem
          key={item.id}
          src={item.webformatURL}
          alt={item.tags}
          openModal={() => openModal(item.largeImageURL)}
        />
      ))}
    </Ul>
  );
};
