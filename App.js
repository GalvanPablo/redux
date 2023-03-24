import React from 'react';

import MainNav from './src/navigators/MainNav';

import { Provider } from 'react-redux';
import store from './src/store'; // GENERA ERROR, DICE QUE NO ES UNDEFINED Y NO ES UNA FUNCION

export default function App() {
    return (
        <Provider store={store}>
            <MainNav />
        </Provider>
    );
}
