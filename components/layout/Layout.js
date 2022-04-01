import React from 'react'
//styles
import styles from './layout-styles/Layout.module.css'
//components
import MainHeader from '../main-header/MainHeader'
import Menu from '../main-header/Menu'

//redux
import { useSelector } from 'react-redux'
//icons
import { FaFacebook, FaGithub, FaTwitch } from 'react-icons/fa'

const Layout = props => {
	const menuShow = useSelector(state => state.menu.showMenu)

	return (
		<div className={styles['layout']}>
			<MainHeader />
			{menuShow && <Menu />}
			<main>{props.children}</main>
			{/* <footer>
				<ul>
					<li>
						<FaFacebook />
					</li>
					<li>
						<FaGithub />
					</li>
					<li>
						<FaTwitch />
					</li>
				</ul>
			</footer> */}
		</div>
	)
}

export default Layout
