import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
//styles
import styles from './main-header-styles/MainHeader.module.css'
//icons
import { FaHeart, FaShoppingCart, FaUser, FaBars } from 'react-icons/fa'
//redux
import { useDispatch, useSelector } from 'react-redux'
import { menuActions } from '../../store/slices/menuSlice'
import { likesActions } from '../../store/slices/likesSlice'
import { cartActions } from '../../store/slices/cartSlice'
const MainHeader = () => {
	const likes = useSelector(state => state.likes.likes)
	const cart = useSelector(state => state.cart.cart)
	const likesQuantity = likes.length
	const cartQuantity = cart.reduce((accum, cartItem) => accum + cartItem.quantity, 0)

	const dispatch = useDispatch()
	const router = useRouter()

	useEffect(() => {
		dispatch(likesActions.checkStoredLikes())
		dispatch(cartActions.checkStoredCart())
	}, [])

	const onMenuBtnClickHandler = () => {
		dispatch(menuActions.openMenu())
	}
	const onLoginHandler = () => {
		router.replace('/login')
	}

	return (
		<header className={styles['main-header']}>
			<div className={styles['box']}>
				<button onClick={onMenuBtnClickHandler}>
					<FaBars className='icon' />
				</button>
				<Link href='/likes'>
					<div className={styles['heart-box']}>
						<FaHeart className='icon' />
						{likesQuantity > 0 && <div className={styles['quantity']}>{likesQuantity}</div>}
					</div>
				</Link>
			</div>
			<Link href='/'>
				<div className='logo'>sneakers</div>
			</Link>
			<div className={styles['box']}>
				<Link href='/cart'>
					<div className={styles['cart-box']}>
						<FaShoppingCart className='icon' />
						{cartQuantity > 0 && <div className={styles['quantity']}>{cartQuantity}</div>}
					</div>
				</Link>
				<button onClick={onLoginHandler}>
					<FaUser className='icon' />
				</button>
			</div>
		</header>
	)
}

export default MainHeader
