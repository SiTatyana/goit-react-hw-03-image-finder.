import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { NoteTitle, Container } from 'components/AppStyled';

import { FetchApi } from 'services/FetchApi';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Loader, LoadMoreButton } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  state = {
    imageName: '',
    imageData: [],
    load: false,
    loadButton: false,
    page: 1,
    notification: false,
    modalOpen: false,
    id: 0,
  };

  componentDidUpdate(_, prevState) {
    const { imageName, page } = this.state;
    const { fetchData } = this;

    if (page !== prevState.page) {
      this.setState({
        loadButton: true,
        notification: false,
      });
      fetchData(imageName, page);
    }
  }

  imageFormSubmit = imageSearchName => {
    const { page } = this.state;
    const { fetchData } = this;
    const { resetSearch } = this;

    this.setState({
      imageName: imageSearchName,
    });
    resetSearch();
    fetchData(imageSearchName, page);
  };

  fetchData = async (name, page) => {
    this.setState({
      load: true,
    });
    try {
      const api = await FetchApi(name, page);
      this.notification(api);

      this.setState(prevState => {
        return {
          imageData: [...prevState.imageData, ...api.hits],
        };
      });
    } catch (error) {
      this.setState({
        error,
      });
    } finally {
      this.setState({
        load: false,
        loadButton: false,
      });
    }
  };

  loadMoreButton = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  resetSearch = () => {
    this.setState({
      imageData: [],
      page: 1,
      notification: false,
    });
  };

  notification = data => {
    console.log(data.totalHits);
    // const { imageData } = this.state;
    if (data.totalHits === 0) {
      this.setState({
        notification: true,
      });
      return;
    }
  };

  openModal = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      this.setState({ modalOpen: true, id: currentTarget.id });
    }
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const {
      imageName,
      modalOpen,
      imageData,
      id,
      loadButton,
      load,
      notification,
    } = this.state;

    const { imageFormSubmit, closeModal, openModal, loadMoreButton } = this;

    return (
      <>
        <Searchbar onSubmit={imageFormSubmit} />
        {modalOpen && (
          <Modal data={imageData} onClose={closeModal} idImage={id} />
        )}
        {load && <Loader onLoad={load} />}

        {imageData.length !== 0 && (
          <>
            <ImageGallery items={imageData} isOpen={openModal} />
            {loadButton ? (
              <LoadMoreButton load={loadButton} />
            ) : (
              <Button onClick={loadMoreButton} />
            )}
          </>
        )}
        {notification && (
          <NoteTitle>
            Sorry :( no image with name <Container>{imageName}</Container>
          </NoteTitle>
        )}
      </>
    );
  }
}
