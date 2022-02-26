import '../styles/globals.css'
import '../styles/style.css'
import '../styles/primitiveui.css'
import '../styles/index.css'
import { Provider } from 'react-redux';
import store from '../store';
const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
