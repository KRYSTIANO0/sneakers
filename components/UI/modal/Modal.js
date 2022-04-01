import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
const Modal = props => {
	const [isBrowser, setIsBrowser] = useState(false)

	useEffect(() => {
		setIsBrowser(true)
	}, [])

	if (isBrowser) {
		return ReactDOM.createPortal(<div className='modal'>{props.children}</div>, document.getElementById('modal-root'))
	} else {
		return null
	}
}

export default Modal
