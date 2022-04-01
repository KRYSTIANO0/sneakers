import React from 'react'
//styles
import styles from './home-styles/HomePage.module.css'
const HomePage = () => {
	return (
		<div className={styles['section-home']}>
			<h1 className='title-text'>Welcome on the Board! </h1>
			<p className='grap-text'>
				This is my portfolio website! In this example i train mine <span className={styles['nextjs']}>NextJS</span> and{' '}
				<span className={styles['mongo']}>MongoDB</span> skills.
			</p>
			<p className='grap-text'>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae tempore perferendis illo quisquam ab,
				tempora doloremque veniam et reprehenderit odit. Modi enim inventore sunt vel, suscipit perferendis aliquid
				earum? Deleniti.
			</p>
			<h1 className='title-text'>Explore</h1>
			<p className='grap-text'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab nemo nesciunt ipsum harum explicabo culpa
				doloremque tempore enim, perferendis velit corporis dolor facilis commodi dolores similique hic pariatur rem.
			</p>
		</div>
	)
}

export default HomePage
