import './MainContent.css';
import { useEffect, useState } from 'react';
export const MainContent = ({ searchedGiphy }) => {
    const [defaultGifs, setGifs] = useState([]);
    useEffect(() => {
        let apiUrl = 'https://api.giphy.com/v1/gifs/trending?api_key=b8Shn5dIpIs9xqBjEJvflv4UhsSZCbCb&limit=25&rating=g';
        if (searchedGiphy) {
            apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=b8Shn5dIpIs9xqBjEJvflv4UhsSZCbCb&q=${searchedGiphy}&limit=25&offset=0&rating=g&lang=en`;
        }
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setGifs(data.data);
            })
    }, [searchedGiphy]);
    return (
        <div className='gifsContainer'>
            {defaultGifs.map((gif) => (
                <div className='giphy' key={gif.id}>
                    <img
                      src={gif.images.fixed_height.url}
                      alt={gif.title}
                    />
                </div>
            ))}
        </div>
    );
};