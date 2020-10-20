import React from 'react';
import SearchArea from './components/SearchArea';
import SearchResult from './components/SearchResult';
import './styles.css';

const Search = () => {
   return (
      <div className="search-container">
         <div className="search-content-area">
            <SearchArea />
         </div>
         <div className="search-content-result">
            <SearchResult />
         </div>
      </div>
   );
}

export default Search;