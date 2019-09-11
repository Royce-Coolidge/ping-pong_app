import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import store from'./Data/store';
import { Provider } from "react-redux";


// subscribe to any changes

ReactDOM.render( // completely recontructs the app component
    <Provider store={ store }>
        <App />
    </Provider>, 
    document.getElementById('root') // attaches it all to the index.html
);
