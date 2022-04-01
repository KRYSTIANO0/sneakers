import React, { useEffect, useState } from 'react'
//styles
import styles from '../forms/sign-/sign-in-styles/SigninForm.module.css'
//emajlJS
import emailjs from '@emailjs/browser'
//hooks
import useInput from '../../hooks/useInput'
const initialAlertState = { message: null, type: null, show: false }

const Contact = () => {
	const [alert, setAlert] = useState(initialAlertState)
	const userID = process.env.NEXT_PUBLIC_USER_ID
	const servideID = process.env.NEXT_PUBLIC_SERVICE_ID
	const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID
	//validations
	const emailValidation = data => {
		return data.match(
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		)
	}
	const emptyValidation = data => {
		return data.trim() !== ''
	}
	//email input
	const {
		value: email,
		clearValue: clearEmail,
		valueIsValid: emailIsValid,
		onChangeHandler: onEmailChangehandler,
		onBlurHandler: onEmailBlurhandler,
		onFocusHandler: onEmailFocusHandler,
		valueClassses: emailClasses,
		labelValueClasses: labelEmailClasses,
	} = useInput(emailValidation)
	//name input
	const {
		value: name,
		clearValue: clearName,
		valueIsValid: nameIsValid,
		onChangeHandler: onNameChangehandler,
		onBlurHandler: onNameBlurhandler,
		valueClassses: nameClasses,
		onFocusHandler: onNameFocusHandler,
		labelValueClasses: labelNameClasses,
	} = useInput(emptyValidation)
	//message name input
	const {
		value: message,
		clearValue: clearMessage,
		valueIsValid: messageIsValid,
		onChangeHandler: onMessageChangehandler,
		onBlurHandler: onMessageBlurhandler,
		onFocusHandler: onMessageFocusHandler,
		valueClassses: messageClasses,
		labelValueClasses: labelMessageClasses,
	} = useInput(emptyValidation)
	const formIsValid = emailIsValid && messageIsValid && nameIsValid

	const submitContactFormHandler = e => {
		e.preventDefault()

		emailjs.sendForm(servideID, templateID, e.target, userID).then(
			result => {
				setAlert({ message: 'Email sent successfully!', type: 'success', show: true })
				clearEmail()
				clearName()
				clearMessage()
			},
			error => {
				console.log(error.text)
			}
		)
	}
	const clearAlert = () => {
		setAlert(initialAlertState)
	}
	if (alert.show === true) {
		setInterval(clearAlert, 3000)
	}
	return (
		<section className={styles['contact-section']}>
			<form className={styles['contact-form']} autoComplete='off' onSubmit={submitContactFormHandler}>
				<ul className={styles['inputs-container']}>
					<li className={emailClasses}>
						<input
							required
							type='email'
							name='email'
							placeholder='E-mail'
							value={email}
							onChange={onEmailChangehandler}
							onBlur={onEmailBlurhandler}
							onFocus={onEmailFocusHandler}
						/>
						<label className={labelEmailClasses} htmlFor='email'></label>
					</li>
					<li className={nameClasses}>
						<input
							required
							type='name'
							name='name'
							placeholder='Name'
							value={name}
							onChange={onNameChangehandler}
							onBlur={onNameBlurhandler}
							onFocus={onNameFocusHandler}
						/>
						<label className={labelNameClasses} htmlFor='name'></label>
					</li>
					<li className={messageClasses}>
						<textarea
							required
							rows={7}
							type='message'
							name='message'
							placeholder='Message'
							value={message}
							onChange={onMessageChangehandler}
							onBlur={onMessageBlurhandler}
							onFocus={onMessageFocusHandler}
						/>
						<label className={labelMessageClasses} htmlFor='message'></label>
					</li>
				</ul>
				<button
					disabled={!formIsValid}
					type='submit'
					className={`${styles['send-message-btn']} ${formIsValid && styles['active']}`}>
					send
				</button>
			</form>
			{alert.show === true && (
				<div className={`${styles['alert']} ${alert.type === 'success' ? styles['success'] : styles['danger']}`}>
					<h1 className='title-text'>{alert.message}</h1>
				</div>
			)}
		</section>
	)
}

export default Contact
