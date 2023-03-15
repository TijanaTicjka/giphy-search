import './App.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { SearchInput } from './components/SearchInput';
import { MainContent } from './components/MainContent';

function App() {
  const [searchedGiphy, setSearchedGiphy] = useState("");
  const [gifs, setGifs] = useState([]);

  const handleSearch = (searchTerm) => {
    setSearchedGiphy(searchTerm);
  }

  return (
    <div className='App'>
      <Header></Header>
      <h1 className='title'>Search Giphy</h1>
      <SearchInput onSearch={handleSearch} />
      <div className='gifs'>
        <MainContent searchedGiphy={searchedGiphy} gifs={gifs} />
      </div>
    </div>
  );
}


export default App;