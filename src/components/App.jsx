import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
// import Loader from './Loader/Loader';
// import ImageGallery from './ImageGallery/ImageGallery';
// import Modal from './Modal/Modal';
// import Button from './Button/Button';

class App extends Component {
  state = {
    searchQuery: '',
  };

  getSearchQuery = searchQuery => {
    return this.setState({ searchQuery });
  };

  componentDidUpdate(_, { searchQuery: oldSearchQuery }) {
    const { searchQuery: newSearchQuery } = this.state;
    if (oldSearchQuery !== newSearchQuery) {
      console.log(this.state.searchQuery);
      fetch(
        `https://pixabay.com/api/?key=34983151-308c1e13d6f3ee051936793b8&q=${newSearchQuery}&image_type=photo&orientation=horizontal&page=1&per_page=12`
      )
        .then(response => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          console.log(response);
          return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.log(error));
    }
  }

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
        <Searchbar onSubmit={this.getSearchQuery} />
        {/* <ImageGallery /> */}
        {/* <Modal /> */}
        {/* <Button /> */}
        {/* <Loader /> */}
      </div>
    );
  }
}

export default App;
