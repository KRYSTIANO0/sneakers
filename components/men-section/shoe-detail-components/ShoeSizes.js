import React, { useState } from 'react'
//styles
import styles from './shoe-detail-styles/ShoeSizes.module.css'
const ShoeSizes = ({ sizes, chooseHandler, choosenSizeIndex }) => {
	return (
		<ul className={styles['sizes']}>
			{sizes.map((sizeItem, index) => {
				const noQuantity = sizeItem.quantity === 0
				let btnClassName
				if (noQuantity) {
					btnClassName = styles['disactive']
				} else {
					btnClassName = styles['active']
				}
				return (
					<button
						disabled={noQuantity}
						className={`${btnClassName} ${index === choosenSizeIndex && styles['choosen']}`}
						key={sizeItem.id}
						onClick={() => chooseHandler(index, sizeItem.size)}>
						<li className={styles['size-item']}>
							<p>EU {sizeItem.size}</p>
						</li>
					</button>
				)
			})}
		</ul>
	)
}

export default ShoeSizes
