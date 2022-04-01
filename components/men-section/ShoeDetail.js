import React, { useState } from 'react'
//styles
import styles from './styles-shoes/ShoeDetail.module.css'
//components
import ImageSlider from './shoe-detail-components/ImageSlider'
import ShoeSizes from './shoe-detail-components/ShoeSizes'
//redux
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/slices/cartSlice'

const initialAlertState = { message: null, type: null, show: false }

const ShoeDetail = ({ images, price, rabat, sizes, title, _id }) => {
	const [alert, setAlert] = useState(initialAlertState)

	const [choosenSizeIndex, setChoosenSizeIndex] = useState(null)
	const [choosenSize, setChoosenSize] = useState(null)
	let rabatPrice
	let quantity = 1
	const dispatch = useDispatch()

	if (rabat > 0) {
		rabatPrice = (price - price * rabat * 0.01).toFixed(2)
	}
	const cartShoe = {
		images,
		price,
		rabat,
		sizes,
		title,
		_id_cart: _id + choosenSize,
		rabatPrice,
		choosenSize,
		quantity,
	}
	const chooseHandler = (index, choosenSize) => {
		setChoosenSizeIndex(index)
		setChoosenSize(choosenSize)
	}
	const onAddToCartHandler = () => {
		setAlert({ message: 'Item has been added to the cart.', type: 'success', show: true })
		dispatch(cartActions.addHandler(cartShoe))
	}
	const clearAlert = () => {
		setAlert(initialAlertState)
	}
	if (alert.show === true) {
		setInterval(clearAlert, 3000)
	}
	return (
		<section className={styles['detail-section']}>
			<div className={styles['media-desktop']}>
				<ImageSlider images={images} />
			</div>
			<div className={styles['media-desktop-wrap']}>
				<header>
					<h1 className='title-text'>{title}</h1>
					{rabat > 0 ? (
						<div className={styles['prices']}>
							<p className={`grap-text ${styles['regular-price']}`}>{price} $</p>
							<p className={`grap-text ${styles['rabat-new-price']}`}>{rabatPrice} $</p>
						</div>
					) : (
						<p className={`grap-text ${styles['price']}`}>{price} $</p>
					)}
				</header>
				<div className={styles['media-mobile']}>
					<ImageSlider images={images} />
				</div>
				<h2 className='title-text'>Dostępne Rozmiary</h2>
				<ShoeSizes sizes={sizes} chooseHandler={chooseHandler} choosenSizeIndex={choosenSizeIndex} />
				{alert.show === true && (
					<div className={`${styles['alert']} ${alert.type === 'success' ? styles['success'] : styles['danger']}`}>
						<h1 className='title-text'>{alert.message}</h1>
					</div>
				)}
				<div className={styles['button-container']}>
					<button onClick={choosenSize && onAddToCartHandler} className={styles['add-button']}>
						{choosenSize ? 'Add to cart' : 'Please choose yor size '}
					</button>
				</div>
			</div>
		</section>
	)
}

export default ShoeDetail
