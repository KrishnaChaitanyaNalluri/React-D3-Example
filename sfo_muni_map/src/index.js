import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import appStore from "./store";
import App from "./modules/App";
import {Provider} from "react-redux";

const store = appStore();

ReactDOM.render(
        <Provider store={store}>
            <App />
         </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
