import React, { useEffect } from 'react'
import Link from 'next/link'
//styles
import styles from './cart-styles/Cart.module.css'
//redux
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../../store/slices/cartSlice'
//componenets
import CartItem from './CartItem'

const Cart = () => {
	const dispatch = useDispatch()

	const cartItems = useSelector(state => state.cart.cart)
	var totalPrice = cartItems.reduce(
		(accum, cartItem) => accum + (cartItem.price - cartItem.price * cartItem.rabat * 0.01) * cartItem.quantity,
		0
	)
	useEffect(() => {
		dispatch(cartActions.checkStoredCart())
	}, [])
	return (
		<section className={styles['cart-section']}>
			<h1 className='title-text'>Cart</h1>
			<ul>
				{cartItems.map(cartItem => {
					return <CartItem key={cartItem._id_cart} {...cartItem} />
				})}
			</ul>
			{cartItems.length === 0 ? (
				<div className={styles['empty-cart']}>
					<h2 className='title-text'>Your cart is empty</h2>
					<div className={styles['navigation-links']}>
						<Link href='/men'>
							<div className={styles['nav-link']}>men shoes</div>
						</Link>
						<Link href='/women'>
							<div className={styles['nav-link']}>woman shoes</div>
						</Link>
					</div>
				</div>
			) : (
				<h1 className={`title-text ${styles['total-price']}`}>
					<span>Total cost: </span> <span>{totalPrice.toFixed(2)} $</span>
				</h1>
			)}
		</section>
	)
}

export default Cart
