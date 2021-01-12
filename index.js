import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// import {GlobalContextProvider} from './components/GlobalContext';
import App from './App';

ReactDOM.render(
        <Router>
            <App />
        </Router>,
    document.getElementById('root')
)
