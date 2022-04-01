import React, { useEffect } from 'react'
import Link from 'next/link'
//styles
import styles from './main-header-styles/Menu.module.css'
//icons
import { FaTimes } from 'react-icons/fa'
//components
import Modal from '../UI/modal/Modal'
import NavbarItem from './NavbarItem'
//redux
import { useDispatch, useSelector } from 'react-redux'
import { menuActions } from '../../store/slices/menuSlice'
import { getMenuData } from '../../store/slices/menuSlice'
const Menu = () => {
	const dispatch = useDispatch()

	const onCloseBtnClickHandler = () => {
		dispatch(menuActions.closeMenu())
	}
	const menu = useSelector(state => state.menu.menuData)
	useEffect(() => {
		dispatch(getMenuData())
	}, [dispatch])
	return (
		<Modal>
			<menu className={styles['menu']}>
				<header>
					<div></div>
					<Link href='/'>
						<div className='logo'>sneakers</div>
					</Link>
					<button onClick={onCloseBtnClickHandler}>
						<FaTimes className='icon' />
					</button>
				</header>
				<nav>
					<ul>
						{menu &&
							menu.map(menuItem => {
								return <NavbarItem key={menuItem.id} {...menuItem} />
							})}
					</ul>
				</nav>
			</menu>
		</Modal>
	)
}

export default Menu
