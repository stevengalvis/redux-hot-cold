import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './reset.css';
import './index.css';

import Game from './components/game';
import store from './store';
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root')
);
