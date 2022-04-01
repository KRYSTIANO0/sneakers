import React, { useState } from 'react'
//styles
import styles from './cart-styles/CartItem.module.css'
//icons
import { FaTrash } from 'react-icons/fa'
//redux
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/slices/cartSlice'
const CartItem = ({ images, price, title, _id_cart, rabatPrice, choosenSize, quantity }) => {
	const dispatch = useDispatch()
	const onDeleteHandler = () => {
		dispatch(cartActions.deleteHandler(_id_cart))
	}
	const onChangeQuantity = e => {
		const newQuantity = e.target.value
		dispatch(cartActions.onQuantityChange({ _id_cart, newQuantity }))
	}
	return (
		<li className={styles['cart-list-item']}>
			<div className={styles['box']}>
				<img className={styles['cart-img']} src={images[0]} alt='' />
				<div className={styles['description']}>
					<h2>
						{title} <p>size: {choosenSize} EU</p>
					</h2>
					<p>{rabatPrice ? rabatPrice : price} $</p>
					<form className={styles['quantity']}>
						<label>quantity:</label>
						<div>
							<select value={quantity} onChange={onChangeQuantity}>
								<option value='1'>1</option>
								<option value='2'>2</option>
								<option value='3'>3</option>
								<option value='4'>4</option>
								<option value='5'>5</option>
								<option value='6'>6</option>
								<option value='7'>7</option>
								<option value='8'>8</option>
								<option value='9'>9</option>
								<option value='10'>10</option>
							</select>
						</div>
					</form>
				</div>
			</div>
			<div className={styles['cart-item-actions']}>
				<button onClick={onDeleteHandler} className={styles['delete']}>
					<FaTrash />
				</button>
			</div>
		</li>
	)
}

export default CartItem
