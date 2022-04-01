import React, { useState } from 'react'
import { useRouter } from 'next/router'
//styles
import styles from './sign-in-styles/Login.module.css'
//components
import Card from '../UI/card/Card'
import Modal from '../UI/modal/Modal'
import SigninForm from '../forms/sign-/SigninForm'
//redux
import { useDispatch } from 'react-redux'

//icons
import { FaTimes } from 'react-icons/fa'
const Login = () => {
	const [isCreatAccount, setIsCreateAccount] = useState(false)

	const dispatch = useDispatch()
	const router = useRouter()

	const onCloseLoginHandler = () => {
		router.replace('/')
	}
	const onToggleClickHandler = () => {
		setIsCreateAccount(currState => !currState)
	}
	return (
		<Modal>
			<Card>
				<section className={styles['login-modal']}>
					<header>
						<div></div>
						<div className='logo'>S</div>
						<button onClick={onCloseLoginHandler}>
							<FaTimes className='icon' />
						</button>
					</header>
					<p className={styles['description']}>
						{isCreatAccount ? 'BECOME A SNEAKERS MEMBER' : 'YOUR ACCOUNT FOR EVERYTHING SNEAKERS'}
					</p>
					<SigninForm isCreatAccount={isCreatAccount} />
					<div className={styles['join-us']}>
						<p className={styles['modal-grap-text']}>
							{isCreatAccount ? 'Already Member ? ' : 'Not a Member '}
							<button className={styles['join-us-btn']} onClick={onToggleClickHandler}>
								{isCreatAccount ? 'Sign In' : 'Join Us'}
							</button>
						</p>
					</div>
				</section>
			</Card>
		</Modal>
	)
}

export default Login
