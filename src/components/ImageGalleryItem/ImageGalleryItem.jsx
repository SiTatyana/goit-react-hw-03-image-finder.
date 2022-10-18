import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItemsStyle';

export const ImageGalleryItem = ({ id, webformatURL, tags, isOpen }) => {
  return (
    <>
      <Item>
        <Image onClick={isOpen} id={id} src={webformatURL} alt={tags} />
      </Item>
    </>
  );
};

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  isOpen: PropTypes.func.isRequired,
};
