import React from 'react'
//styles
import styles from './sign-in-styles/SigninForm.module.css'
//componenets
//hooks
import useInput from '../../../hooks/useInput'

const SiginForm = ({ isCreatAccount }) => {
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
		valueIsValid: emailIsValid,
		onChangeHandler: onEmailChangehandler,
		onBlurHandler: onEmailBlurhandler,
		valueClassses: emailClasses,
	} = useInput(emailValidation)
	//password input
	const {
		value: password,
		valueIsValid: passwordIsValid,
		onChangeHandler: onPasswordChangehandler,
		onBlurHandler: onPasswordBlurhandler,
		valueClassses: passwordClasses,
	} = useInput(emptyValidation)
	//first name input
	const {
		value: firstName,
		valueIsValid: firstNameIsValid,
		onChangeHandler: onfirstNameChangehandler,
		onBlurHandler: onfirstNameBlurhandler,
		valueClassses: firstNameClasses,
	} = useInput(emptyValidation)
	//last name input
	const {
		value: lastName,
		valueIsValid: lastNameIsValid,
		onChangeHandler: onlastNameChangehandler,
		onBlurHandler: onlastNameBlurhandler,
		valueClassses: lastNameClasses,
	} = useInput(emptyValidation)
	const logInFormIsValid = emailIsValid && passwordIsValid
	const createAccFormIsValid = emailIsValid && passwordIsValid && firstNameIsValid && lastNameIsValid
	//submit handler
	const onSubmitHandler = e => {
		e.preventDefault()
	}
	return (
		<form className={styles['signin-form']} onSubmit={onSubmitHandler}>
			<div className={emailClasses}>
				<input
					type='email'
					placeholder='E-mail'
					value={email}
					onChange={onEmailChangehandler}
					onBlur={onEmailBlurhandler}
				/>
			</div>

			<div className={passwordClasses}>
				<input
					type='password'
					placeholder='Password'
					value={password}
					onChange={onPasswordChangehandler}
					onBlur={onPasswordBlurhandler}
				/>
			</div>
			{isCreatAccount && (
				<>
					<div className={firstNameClasses}>
						<input
							type='text'
							placeholder='First name'
							value={firstName}
							onChange={onfirstNameChangehandler}
							onBlur={onfirstNameBlurhandler}
						/>
					</div>

					<div className={lastNameClasses}>
						<input
							type='text'
							placeholder='Last name'
							value={lastName}
							onChange={onlastNameChangehandler}
							onBlur={onlastNameBlurhandler}
						/>
					</div>
				</>
			)}
			<button
				disabled={isCreatAccount ? !createAccFormIsValid : !logInFormIsValid}
				type='submit'
				className={styles['log-in-btn']}>
				commming soon
			</button>
		</form>
	)
}

export default SiginForm
