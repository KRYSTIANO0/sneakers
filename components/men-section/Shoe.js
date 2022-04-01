import React, { useState } from 'react'
import { useRouter } from 'next/router'
//styles
import styles from './styles-shoes/Shoe.module.css'
//icons
import { BiHeart } from 'react-icons/bi'
//redux
import { useDispatch, useSelector } from 'react-redux'
import { likesActions } from '../../store/slices/likesSlice'

const Shoe = ({ price, title, rabat, images, type, _id, actionType }) => {
	const likes = useSelector(state => state.likes.likes)
	const isLiked = likes.find(like => like._id === _id)
	const shoe = {
		price,
		title,
		rabat,
		images,
		type,
		_id,
	}
	const router = useRouter()
	const dispatch = useDispatch()
	let rabatPrice
	if (rabat > 0) {
		rabatPrice = (price - price * rabat * 0.01).toFixed(2)
	}
	const onShoeClickHandler = () => {
		router.push(`/men/${_id}`)
	}
	const onLikeHandler = () => {
		dispatch(likesActions.addHandler(shoe))
	}
	return (
		<li className={styles['shoe-box']}>
			<div className={styles['img-box']}>
				<button onClick={onShoeClickHandler}>
					<img src={images[0]} alt='' />
				</button>
				<button className={`${styles['heart-icon']} ${isLiked && styles['active']}`} onClick={onLikeHandler}>
					<BiHeart />
				</button>
				{actionType !== 'likes' && (
					<div>
						{rabat > 0 ? (
							<>
								<span className={`grap-text ${styles['price-span']} ${styles['rabat']}`}>
									<p className={styles['rabat-price']}>{price} $</p>
									<p className={styles['rabat-new-price']}>{rabatPrice} $</p>
									<span className={`grap-text ${styles['rabat-span']}`}>-{rabat}%</span>
								</span>
							</>
						) : (
							<span className={`grap-text ${styles['price-span']}`}>{price} $</span>
						)}
					</div>
				)}
			</div>
			<div className={styles['description']}>
				<h2 className='title-text'>{title}</h2>
				<p className='grap-text'>{type}</p>
			</div>
		</li>
	)
}

export default Shoe
