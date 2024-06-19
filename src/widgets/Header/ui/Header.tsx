import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className='container'>
				<h1>Kaspi Chat App</h1>
			</div>
		</header>
	)
}

export default Header
