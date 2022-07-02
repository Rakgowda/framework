import Nav from '../components/ScreenComponent/Nav/Nav'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return <Nav>
  <Component {...pageProps} /> </Nav>
}

export default MyApp
