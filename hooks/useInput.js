import { useState } from 'react'
//styles
import styles from '../components/forms/sign-/sign-in-styles/SigninForm.module.css'

const useInput = validation => {
	const [value, setValue] = useState('')
	const [isTouched, setIsTouched] = useState(false)
	const [isFocused, setIsFocused] = useState(false)

	const valueIsValid = isTouched && validation(value)
	const valueisInValid = isTouched && !valueIsValid

	const onChangeHandler = e => {
		setValue(e.target.value)
	}
	const onFocusHandler = () => {
		setIsFocused(true)
	}
	const onBlurHandler = () => {
		setIsFocused(false)
		setIsTouched(true)
	}
	const clearValue = () => {
		setValue('')
		setIsTouched(false)
	}
	const valueClassses = `${styles['box']} ${valueIsValid && styles['isValid']} ${valueisInValid && styles['isInValid']}`

	const labelValueClasses = `${isFocused && styles['isFocused']}`
	return {
		value,
		clearValue,
		valueIsValid,
		valueisInValid,
		onChangeHandler,
		onBlurHandler,
		onFocusHandler,
		valueClassses,
		labelValueClasses,
	}
}

export default useInput
