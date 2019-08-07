import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { configureStore } from './store'
import App from './App'

// Inititalize store
const store = configureStore({});
const amountApp = document.getElementById('root');

render(
    <AppContainer>
        <App store={store} />
    </AppContainer>,
    amountApp
)