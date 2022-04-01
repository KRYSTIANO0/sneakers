import React from 'react'
import Link from 'next/link'
//styles
import styles from './main-header-styles/NavbarItem.module.css'
//redux
import { useDispatch } from 'react-redux'
import { menuActions } from '../../store/slices/menuSlice'
const NavbarItem = ({ title, url }) => {
	const dispatch = useDispatch()
	return (
		<li className={styles['menu-list-item']} onClick={() => dispatch(menuActions.closeMenu())}>
			<Link href={url}>
				<h1 className='title-text'>{title}</h1>
			</Link>
		</li>
	)
}

export default NavbarItem
