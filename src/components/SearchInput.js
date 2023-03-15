import './SearchInput.css';
import { useState } from "react";
export const SearchInput = ({ onSearch }) => {
    const [searchGiphy, setSearchGiphy] = useState('');
  
    const handleChange = (event) => {
      setSearchGiphy(event.target.value);
    }
  
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        onSearch(searchGiphy);
        setSearchGiphy('');
      }
    };
  
    return (
      <input 
        className='search' 
        type='text' 
        value={searchGiphy} 
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder='Search for Gifs...'
      />
    )
  }