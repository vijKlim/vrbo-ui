import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import App from './components/App';

import store from './store';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

const StoreWrapper = () => {
  return (
	<Provider store={store}>
		<App />
	</Provider>
  )
}

render(StoreWrapper);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(StoreWrapper);
    });
}