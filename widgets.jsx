import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Weather from './frontend/weather';

const panes = [
    { title: 'one', content: 'I am the first' },
    { title: 'two', content: 'Second pane here' },
    { title: 'three', content: 'Third pane here' }
];

const Root = () => {
    return(
        <div>
            < Clock />
            < Weather />
            < Tabs panes={panes} />
        </div>
    )
}


document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Root />, document.getElementById('main'));
});