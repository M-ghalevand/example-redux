import { Provider } from 'react-redux';

import store from '../services/store';
import '../styles/App.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
