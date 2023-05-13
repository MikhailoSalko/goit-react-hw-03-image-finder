import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
// import Loader from './Loader/Loader';
// import ImageGallery from './ImageGallery/ImageGallery';
// import Modal from './Modal/Modal';
// import Button from './Button/Button';

class App extends Component {
  render() {
    return (
      <div
        style={{
          height: '100px',
          fontSize: 40,
          color: '#010101',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar />
        {/* <ImageGallery /> */}
        {/* <Modal /> */}
        {/* <Button /> */}
        {/* <Loader /> */}
      </div>
    );
  }
}

export default App;
