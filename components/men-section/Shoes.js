import React from 'react'
//styles
import styles from './styles-shoes/Shoes.module.css'
//components
import Shoe from './Shoe'
const Shoes = ({ shoes, type }) => {
	return (
		<div className={styles['container']}>
			{type === 'likes' || <h1 className='title-text'>{type === 'men' ? "MEN'S " : "WOMEN'S "}SHOES</h1>}

			<ul className={`${styles['mens-shoes']} ${type === 'likes' && styles['like-shoes']}`}>
				{shoes.map(shoe => {
					return <Shoe key={shoe._id} {...shoe} actionType={type} />
				})}
			</ul>
		</div>
	)
}

export default Shoes
