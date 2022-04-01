import '../styles/globals.css'
//components
import Layout from '../components/layout/Layout'
//redux
import { Provider } from 'react-redux'
import store from '../store/index'
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<Provider store={store}>
			<Layout>
				<div className='container'>
					<Component {...pageProps} />
				</div>
			</Layout>
		</Provider>
	)
}

export default MyApp
