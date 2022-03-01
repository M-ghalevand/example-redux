import { Provider } from 'react-redux';

import store from '../pages/api/store' ;
import '../styles/globals.css';
import '../styles/style.css';
import '../styles/primitiveui.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
