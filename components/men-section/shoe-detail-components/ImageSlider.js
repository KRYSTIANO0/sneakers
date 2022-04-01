import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
//styles
import styles from './shoe-detail-styles/ImageSlider.module.css'
//swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
const ImageSlider = ({ images }) => {
	return (
		<>
			<Swiper navigation={true} modules={[Navigation]} className={styles['swiper']}>
				{images.map((image, index) => {
					return (
						<SwiperSlide key={index} className={styles['slide']}>
							<img src={image} alt='' />
						</SwiperSlide>
					)
				})}
			</Swiper>

			<ul className={styles['all-images']}>
				{images.map((image, index) => {
					return (
						<li key={index} className={styles['list-images-item']}>
							<img src={image} alt='' />
						</li>
					)
				})}
			</ul>
		</>
	)
}

export default ImageSlider
