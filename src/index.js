import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDZXPo9wUxJAcL91yqUNg9qygWOKF2BI5E';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

ReactDOM.render(
    <App />
  , document.querySelector('.container')
);
