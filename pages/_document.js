import Document, { Html, Head, NextScript, Main } from 'next/document'

class MainDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head />
				<NextScript />
				<Main></Main>
				<body>
					<div id='modal-root'></div>
				</body>
			</Html>
		)
	}
}

export default MainDocument
