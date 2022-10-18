import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGalleryStyle';

export const ImageGallery = ({ items, isOpen }) => {
  const imageList = items.map(({ tags, id, webformatURL }) => {
    return (
      <ImageGalleryItem
        key={id}
        tags={tags}
        id={id}
        webformatURL={webformatURL}
        isOpen={isOpen}
      />
    );
  });
  return <ImageGalleryList>{imageList}</ImageGalleryList>;
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      tags: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};
