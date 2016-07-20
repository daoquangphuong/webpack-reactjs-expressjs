import React from 'react'
import {render} from 'react-dom'
import App from './app/app'

// check HRM

if (module.hot) {
	module.hot.accept();
}

render(<App/>, document.getElementById('root'));
