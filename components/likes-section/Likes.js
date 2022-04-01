import React, { useEffect } from 'react'
//styles
import styles from './likes-styles/Likes.module.css'
//componenets
import Shoes from '../men-section/Shoes'
//redux
import { useSelector, useDispatch } from 'react-redux'
import { likesActions } from '../../store/slices/likesSlice'

const Likes = () => {
	const likes = useSelector(state => state.likes.likes)
	const uniqLikes = [...new Set(likes)]

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(likesActions.checkStoredLikes())
	}, [])
	return (
		<section className={styles['section-likes']}>
			<header>
				<h1 className='title-text'>Your wish list</h1>
			</header>

			{uniqLikes.length === 0 ? (
				<div className={styles['empty-wish-list']}>
					<h1 className='title-text'>
						Your wish List is empty.
						<br />
						Add something you like.
					</h1>
				</div>
			) : (
				<Shoes shoes={uniqLikes} type='likes' />
			)}
		</section>
	)
}

export default Likes
